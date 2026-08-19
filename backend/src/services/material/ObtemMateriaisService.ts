import prismaClient from "../../prisma"

class ObtemMateriaisService {

    async execute() {

        const materiais = await prismaClient.material.findMany({
            
            select: {
                id: true,
                nome: true,
                descricao: true,
                link: true
            }
        })

        return materiais
    }
}

export { ObtemMateriaisService }
