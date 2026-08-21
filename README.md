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

## Publicação

Quase tudo é automático. As duas exceções falham **em silêncio**, então valem
o parágrafo:

**O site:** enquanto ele estiver na Vercel, o merge de um PR que toca
`front-end/` precisa sair **pela conta do PET**. Merge por qualquer outra
pessoa é recusado sem aviso, e o site simplesmente continua na versão anterior
— foi assim que ele serviu um build de dezembro por seis semanas. O workflow
`confere-versao-no-ar` fica vermelho quando isso acontece, e o site publica no
HTML qual commit está no ar.

**A API:** o push no `main` que toca `back-end/` publica a imagem, e o CI abre
um **PR de deploy** com o digest novo. Publicar não é implantar: é mesclar esse
PR que coloca a versão em produção.
