# PET Game Jam

Site e API do Game Jam do PET Engenharia de Computação da UFES — o torneio de
programação de jogos organizado pelo grupo.

| | endereço | onde roda |
|---|---|---|
| Site | <https://gamejam.pet.inf.ufes.br> | Vercel, a partir de `front-end/` — **em migração para a VM** |
| API | <https://apigamejam.pet.inf.ufes.br> | container na VM do PET, atrás do Traefik |

```
front-end/   Next.js 16, React 19, Tailwind 4 — site público e painel da organização
back-end/    Express 4, Prisma, MySQL — API REST e os uploads de imagem
```

Cada diretório tem o próprio README com como rodar, variáveis de ambiente e
detalhes: [`front-end/README.md`](front-end/README.md) e
[`back-end/README.md`](back-end/README.md).

## Convenção de nomes

Vale para este repositório, para as imagens e para a stack na VM:

- **hífen** separa palavras que se escrevem separadas — `game-jam`, `back-end`
- **underscore** marca a fronteira entre projeto e objeto — `game-jam_back-end`

O underscore não é invenção: é o separador que o próprio Docker usa em volume e
rede. Sem ele, `game-jam-back-end` é ambíguo para quem lê — não dá para saber
onde termina o projeto e começa o serviço.

Exceção obrigatória: **nome de host não aceita underscore**. Por isso o domínio
é `game-jam-api.pet.inf.ufes.br` e o alias de rede do banco é
`game-jam-database`, com hífen.

## Por que um repositório só

Os dois lados vinham em repositórios separados, `new-gamejam-backend` e
`new-gamejam-frontend`. São o mesmo produto, feito pelas mesmas pessoas, e uma
mudança que atravessa os dois — um campo novo no formulário de inscrição, por
exemplo — virava dois pull requests que podiam entrar fora de ordem e deixar o
site quebrado no meio.

Além disso, cada configuração existia em duas cópias, e elas divergiram: um
repositório tinha licença e o outro não, um tinha CI e o outro não, um tinha
README e o outro tinha o texto do `create-next-app`. Em agosto de 2026 as duas
cópias do site já estavam com versões diferentes de React e de `sonner`.

As duas histórias foram trazidas inteiras, cada uma sob o seu diretório. Nada
foi achatado — `git log front-end/src/app/layout.tsx` continua chegando no
commit inicial de 2025.

## Publicação

**Site:** hoje, automática pela Vercel. O que entra no `main` vai para produção.

Com uma pegadinha que já custou seis semanas de site desatualizado: o plano
atual da Vercel só publica commit autorado pela conta do PET. Commit de outra
pessoa entra no `main` normalmente, a Vercel recusa com `Deployment was
blocked`, e ninguém é avisado — o site simplesmente continua na versão
anterior. Por isso o caminho é branch, pull request e merge pela interface do
GitHub, que gera um commit de merge autorado pela conta do PET. Squash e rebase
estão desligados no repositório justamente para não reescrever essa autoria.

Essa pegadinha morre quando o site sair da Vercel. A imagem
`ghcr.io/pet-eng-comp-ufes/game-jam_front-end` já é construída a cada push que
toca `front-end/`; falta o registro de DNS apontar para a VM.

**API:** o push no `main` que toca `back-end/` constrói e publica a imagem em
`ghcr.io/pet-eng-comp-ufes/game-jam_back-end`, com tag `sha-<commit>` e
`latest`. Publicar não é implantar: a stack no Portainer aponta para o **digest**
do commit, de propósito, e trocar de versão é um ato deliberado.

> **`NEXT_PUBLIC_API_URL` é assada no build**, não lida em execução. Está no
> workflow do front-end como `build-arg`. Defini-la no compose não tem efeito
> nenhum — e a falha é silenciosa: o site sobe apontando para lugar nenhum.
