# Fixada por digest, e nao pela tag node:22, porque a tag troca de conteudo sem
# aviso: duas construcoes da mesma revisao do codigo podiam gerar imagens
# diferentes. Quem traz o digest novo quando a base recebe correcao e o
# Dependabot, configurado em .github/dependabot.yml.
FROM node:22@sha256:0557ac14e0d45d02ed563067b82856ca5e7aa3437fa28d98d4350ea9c3d9494a

WORKDIR /app

# Os manifestos e o schema vem antes do resto do codigo para o Docker poder
# reaproveitar a camada de dependencias: enquanto eles nao mudam, editar src/
# nao refaz a instalacao. O prisma/ precisa estar aqui porque a instalacao do
# @prisma/client executa o prisma generate, que le o schema.
COPY package.json package-lock.json ./
COPY prisma ./prisma

# npm ci instala exatamente as versoes do package-lock. O npm install podia
# resolver versoes diferentes das travadas, e a imagem deixava de corresponder
# ao que esta no repositorio.
RUN npm ci

COPY . .

RUN npm run build

# O Express usa esta variavel para nao devolver stack trace ao cliente.
ENV NODE_ENV=production

EXPOSE 3333

CMD ["npm", "run", "start"]
