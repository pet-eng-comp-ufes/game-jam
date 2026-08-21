import prismaClient from "../../prisma"

interface UserRequest {

    id: string
}

class DeleteUserService {

    async execute({ id }: UserRequest) {

        const user = await prismaClient.user.delete({

            where: {
                id: id
            },
            // Sem o select, o delete devolve a linha inteira, com o hash.
            select:{
                id: true,
                username: true
            }
        })

        return user
    }
}

export { DeleteUserService }