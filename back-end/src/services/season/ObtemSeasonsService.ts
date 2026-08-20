import prismaClient from "../../prisma";

class ObtemSeasonsService {

    async execute() {

        const seasons = await prismaClient.season.findMany({
            orderBy:{
                numero: "asc"
            }
        })

        return seasons
    }
}

export { ObtemSeasonsService }