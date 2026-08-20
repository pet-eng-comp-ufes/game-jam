import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emite um servidor minimo em .next/standalone, com so as dependencias que o
  // codigo realmente importa. Sem isto a imagem teria que carregar o
  // node_modules inteiro e rodar "next start" — centenas de MB para servir um
  // site estatico com algumas rotas dinamicas.
  //
  // Necessario para o Dockerfile: ele copia .next/standalone e chama
  // "node server.js". Remover esta linha quebra a imagem.
  output: "standalone",
};

export default nextConfig;
