# PET Game Jam

Site e API do Game Jam do PET Engenharia de Computação da UFES — o torneio de
programação de jogos organizado pelo grupo.

| | endereço | onde roda |
|---|---|---|
| Site | <https://gamejam.pet.inf.ufes.br> | Vercel, a partir de `frontend/` |
| API | <https://apigamejam.pet.inf.ufes.br> | container na VM do PET, atrás do Traefik |

```
frontend/   Next.js 16, React 19, Tailwind 4 — site público e painel da organização
backend/    Express 4, Prisma, MySQL — API REST e os uploads de imagem
```

Cada diretório tem o próprio README com como rodar, variáveis de ambiente e
detalhes: [`frontend/README.md`](frontend/README.md) e
[`backend/README.md`](backend/README.md).

## Por que um repositório só

Os dois lados vinham em repositórios separados, `new-gamejam-backend` e
`new-gamejam-frontend`. São o mesmo produto, feito pelas mesmas pessoas, e uma
mudança que atravessa os dois — um campo novo no formulário de inscrição, por
exemplo — virava dois pull requests que podiam entrar fora de ordem e deixar o
site quebrado no meio.

Além disso, cada configuração existia em duas cópias, e elas divergiram: um
repositório tinha licença e o outro não, um tinha CI e o outro não, um tinha
README e o outro tinha o texto do `create-next-app`.

As duas histórias foram trazidas inteiras, cada uma sob o seu diretório. Nada
foi achatado — `git log frontend/src/app/layout.tsx` continua chegando no
commit inicial de 2025.

## Publicação

**Site:** automática. O que entra no `main` vai para produção.

Com uma pegadinha que já custou seis semanas de site desatualizado: o plano
atual da Vercel só publica commit autorado pela conta do PET. Commit de outra
pessoa entra no `main` normalmente, a Vercel recusa com `Deployment was
blocked`, e ninguém é avisado — o site simplesmente continua na versão
anterior. Por isso o caminho é branch, pull request e merge pela interface do
GitHub, que gera um commit de merge autorado pela conta do PET. Squash e rebase
estão desligados no repositório justamente para não reescrever essa autoria.

**API:** o push no `main` que toca `backend/` constrói e publica a imagem em
`ghcr.io/petengcomp/gamejam-backend`, com tag `sha-<commit>` e `latest`.
Publicar não é implantar: a stack no Portainer aponta para a tag do commit, de
propósito, e trocar de versão é um ato deliberado.
