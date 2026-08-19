import prismaClient from "../../prisma"

interface SeasonRequest {

    id: string
}

class AtualSeasonService {

    async execute({ id }: SeasonRequest){

        //Atualizando a season atual anterior
        const seasonAtual = await prismaClient.season.findFirst({
            where:{
                atual: true
            }
        })

        if(seasonAtual) {
            await prismaClient.season.update({
                where:{
                    id: seasonAtual.id
                },
                data:{
                    atual: false
                }
            })
        }

        //Definindo nova season atual
        const season = await prismaClient.season.update({
            where:{
                id: id
            },
            data:{
                atual: true
            }
        })

        return season
    }
}

export { AtualSeasonService }