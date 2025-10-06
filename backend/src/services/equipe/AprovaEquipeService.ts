import prismaClient from "../../prisma"

interface EquipeRequest {
    id: string;
}


class AprovaEquipeService {

    async execute({ id }: EquipeRequest){

        const equipe = await prismaClient.equipe.findUnique({
            where:{
                id
            }
        })

        if(!equipe){
            throw new Error("Equipe não encontrada.")
        }

        const equipeAprovada = await prismaClient.equipe.update({

            where:{
                id: id
            },

            data:{
                aprovada: true,
                updatedAt: new Date(),
            },
        });

        return equipeAprovada
    }
}

export { AprovaEquipeService }