# Política de segurança

## Como reportar uma vulnerabilidade

**Não abra uma issue pública.** Issue é visível para qualquer pessoa, e uma
falha descrita ali fica exposta antes de existir conserto.

Use um destes canais:

- **[Security advisory privado](https://github.com/pet-eng-comp-ufes/game-jam/security/advisories/new)**
  — fica visível só para quem mantém o repositório, e vira o registro do
  conserto quando resolvido.
- Ou fale diretamente com alguém da **comissão de Manutenção do PET Engenharia
  de Computação**.

Descreva o que encontrou e, se possível, como reproduzir. Não é preciso ter
certeza de que é explorável — suspeita fundamentada já ajuda.

## O que este repositório contém

O site e a API do Game Jam. A API guarda **dados pessoais de participantes** —
nome, e-mail e CPF —, então falha de autenticação, de autorização ou de
exposição de dados é levada a sério mesmo quando parece pequena.

## O que não é vulnerabilidade aqui

- O código ser público. É de propósito: o PET é um programa de ensino.
- As rotas `POST /equipe` e `POST /participante` não exigirem login. São o
  formulário de inscrição, e têm limite de taxa por IP.

## Versões

Só a versão em produção — o que está no `main` — recebe correção. Não há
versões antigas mantidas em paralelo.
