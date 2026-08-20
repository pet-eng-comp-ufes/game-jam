import prismaClient from "../../prisma"

interface EquipeRequest {
    id: string;
}


class ReprovaEquipeService {

    async execute({ id }: EquipeRequest){

        const equipe = await prismaClient.equipe.findUnique({
            where:{
                id
            }
        })

        if(!equipe){
            throw new Error("Equipe não encontrada.")
        }

        const equipeReprovada = await prismaClient.equipe.update({

            where:{
                id: id
            },

            data:{
                aprovada: false,
                updatedAt: new Date(),
            },
        });

        return equipeReprovada
    }
}

export { ReprovaEquipeService }