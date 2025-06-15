import prismaClient from "../../prisma";

interface MaterialRequest {
    nome: string;
    descricao: string;
    link: string;
}

class CriaMaterialService {

    async execute({ nome, descricao, link }: MaterialRequest) {

        const m = await prismaClient.material.create({
            data: {
                nome: nome,
                descricao: descricao,
                link: link
            }
        })

        return m
    }
}

export { CriaMaterialService };