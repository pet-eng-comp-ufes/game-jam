import prismaClient from "../../prisma";

interface PatrocinadorRequest {
    nome: string;
    logo: string;
}

class CriaPatrocinadorService {

    async execute({ nome, logo }: PatrocinadorRequest) {

        const patrocinador = await prismaClient.patrocinador.create({
            data: {
                nome,
                logo
            }
        });

        return patrocinador;
    }
}

export { CriaPatrocinadorService };
