import prismaClient from "../../prisma"

interface SeasonRequest {

    id: string
}

class DeletaSeasonService {

    async execute({ id }: SeasonRequest){

        const season = await prismaClient.season.delete({
            where:{
                id: id
            }
        })

        return season
    }
}

export { DeletaSeasonService }