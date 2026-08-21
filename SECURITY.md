# Política de segurança

## Como reportar uma vulnerabilidade

**Não abra uma issue pública.** Issue é visível para qualquer pessoa, e uma
falha descrita ali fica exposta antes de existir conserto.

Use um destes canais:

- **[Security advisory privado](https://github.com/pet-eng-comp-ufes/game-jam/security/advisories/new)**
  — fica visível só para quem mantém o repositório, e vira o registro do
  conserto quando resolvido.
- Ou fale diretamente com alguém do **PET Engenharia de Computação — UFES**.

### O que incluir

Quanto mais destes você conseguir, mais rápido vira conserto:

- que tipo de problema é;
- em que arquivo e, se souber, em que linha;
- em que versão — a tag, o commit, ou só a data em que você viu;
- que configuração é necessária para reproduzir;
- o passo a passo para reproduzir;
- código de prova, se tiver;
- qual o impacto: o que alguém consegue fazer explorando isso.

**Não é preciso ter tudo, nem ter certeza de que é explorável.** Suspeita
fundamentada já ajuda — é melhor receber um alarme falso do que não receber o
verdadeiro.

Respondemos assim que possível, e mantemos você informado até o conserto sair.

## O que este repositório contém

O site e a API do Game Jam, mantidos pelo **PET Engenharia de Computação da
UFES**. A API guarda **dados pessoais de participantes** — nome, e-mail e CPF —,
então falha de autenticação, de autorização ou de exposição de dados é levada a
sério mesmo quando parece pequena.

## O que não é vulnerabilidade aqui

- O código ser público. É de propósito: o PET é um programa de ensino.
- As rotas `POST /equipe` e `POST /participante` não exigirem login. São o
  formulário de inscrição, e têm limite de taxa por IP.

## Versões

Só a versão em produção — o que está no `main` — recebe correção. Não há
versões antigas mantidas em paralelo.
