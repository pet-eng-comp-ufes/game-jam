import prismaClient from "../../prisma";

interface SeasonRequest {

    id: string
}

class FechaInscricaoSeasonService {

    async execute({ id }: SeasonRequest) {
        
        const season = await prismaClient.season.update({

            where:{
                id: id
            },
            data:{
                inscricoesAbertas: false
            }
        })

        return season
    }
}

export { FechaInscricaoSeasonService }