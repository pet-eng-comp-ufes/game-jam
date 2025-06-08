import prismaClient from "../../prisma"

interface SeasonRequest {

    numero: string
    capa: string
    numParticipantesPorEquipe: string
}


class CriaSeasonService {

    async execute({ numero, capa, numParticipantesPorEquipe }: SeasonRequest){

        const seasonJaExiste = await prismaClient.season.findFirst({
            where:{
                numero: numero
            }
        })

        if(seasonJaExiste){
            throw new Error("Já existe uma Season com este número.")
        }

        const season = await prismaClient.season.create({

            data:{
                numero: numero,
                capa: capa,
                numParticipantesPorEquipe: numParticipantesPorEquipe
            }
        })

        return season
    }
}

export { CriaSeasonService }