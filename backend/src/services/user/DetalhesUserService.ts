import prismaClient from "../../prisma";

class DetalhesUserService {

    async execute(user_id: string){

        const user = await prismaClient.user.findFirst({
            where:{
                id: user_id
            },
            select:{
                id: true,
                username: true
            }
        })

        return user
    }
}

export { DetalhesUserService }