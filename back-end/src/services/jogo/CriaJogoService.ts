import prismaClient from "../../prisma"

interface JogoRequest {

    seasonId: string
    nome: string
    capa: string
    descricao: string
    link: string
}


class CriaJogoService {

    async execute({ seasonId, nome, capa, descricao, link }: JogoRequest){

        

        const jogo = await prismaClient.jogo.create({

            data:{
                nome,
                capa,
                descricao,
                link,
                seasonId
            }
        })

        return jogo
    }
}

export { CriaJogoService }