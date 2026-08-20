import prismaClient from "../../prisma"

class ObtemUsersService {

    async execute() {

        const users = await prismaClient.user.findMany({

            select: {
                id: true,
                username: true
            }
        })

        return users
    }
}

export { ObtemUsersService }