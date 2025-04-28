import prismaClient from "../../prisma";

class ObtemSeasonsService {

    async execute() {

        const seasons = await prismaClient.season.findMany()

        return seasons
    }
}

export { ObtemSeasonsService }