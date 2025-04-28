import prismaClient from "../../prisma";

class ObtemAtualSeasonService {

    async execute() {

        const seasonAtual = await prismaClient.season.findFirst({

            where:{
                atual: true
            }
        })

        return seasonAtual
    }
}

export { ObtemAtualSeasonService }