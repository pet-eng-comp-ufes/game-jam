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

Vale para as pastas, para as imagens e para a stack na VM:

- **hífen** separa palavras que se escrevem separadas — `game-jam`, `back-end`
- **underscore** marca a fronteira entre projeto e objeto — `game-jam_back-end`

O underscore é o mesmo separador que o Docker usa sozinho em volume e rede.
Sem ele, `game-jam-back-end` não diz onde termina o projeto.

**Exceção obrigatória:** nome de host não aceita underscore. Por isso o domínio
é `game-jam-api.pet.inf.ufes.br` e o alias de rede do banco é
`game-jam-database`, com hífen.

## Publicação

**Site:** hoje é automática pela Vercel — o que entra no `main` vai para
produção.

Com uma pegadinha que já custou seis semanas de site desatualizado: o plano
atual da Vercel **só publica commit autorado pela conta do PET**. Commit de
outra pessoa entra no `main` normalmente, a Vercel recusa com `Deployment was
blocked`, e ninguém é avisado — o site simplesmente continua na versão
anterior.

Por isso o caminho é branch, pull request e merge pela interface do GitHub, que
gera um commit de merge autorado pela conta do PET. Squash e rebase estão
desligados no repositório para não reescrever essa autoria.

Isso acaba quando o site sair da Vercel. A imagem
`ghcr.io/pet-eng-comp-ufes/game-jam_front-end` já é construída a cada push que
toca `front-end/`; falta o DNS apontar para a VM.

**API:** o push no `main` que toca `back-end/` constrói e publica
`ghcr.io/pet-eng-comp-ufes/game-jam_back-end`, com tag `sha-<commit>` e
`latest`.

Publicar não é implantar: a stack no Portainer aponta para o **digest** do
commit, de propósito, e trocar de versão é um ato deliberado.

> **`NEXT_PUBLIC_API_URL` é assada no build**, não lida em execução. Está no
> workflow do front-end como `build-arg`. Defini-la no compose não tem efeito
> nenhum — e a falha é silenciosa: o site sobe apontando para lugar nenhum.
