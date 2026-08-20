import prismaClient from "../../prisma";

interface SeasonRequest {

    id: string
}

class AbreInscricaoSeasonService {

    async execute({ id }: SeasonRequest) {
        
        const season = await prismaClient.season.update({

            where:{
                id: id
            },
            data:{
                inscricoesAbertas: true
            }
        })

        return season
    }
}

export { AbreInscricaoSeasonService }