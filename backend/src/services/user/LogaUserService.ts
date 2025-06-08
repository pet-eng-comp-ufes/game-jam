import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface LoginRequest{

    username: string
    senha: string
}

class LogaUserService {

    async execute({ username, senha }: LoginRequest){

        const user = await prismaClient.user.findFirst({

            where: {
                username: username
            }
        })

        if(!user) throw new Error("User or password incorrect.")

        const senhaMatch = await compare(senha, user.senha)

        if(!senhaMatch) throw new Error("User or password incorrect.")

        const token = sign(
            {
                username: user.username
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            username: user.username,
            token: token
        }
    }
}

export { LogaUserService }