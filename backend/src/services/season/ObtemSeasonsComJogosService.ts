import prismaClient from "../../prisma";

class ObtemSeasonsComJogosService {

    async execute() {

        const seasons = await prismaClient.season.findMany({
            orderBy:{
                numero: "asc"
            },
            include:{
                jogos: true
            }
        })

        return seasons
    }
}

export { ObtemSeasonsComJogosService }