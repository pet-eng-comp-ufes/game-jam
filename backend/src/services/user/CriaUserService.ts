import prismaClient from "../../prisma"
import { hash } from "bcryptjs"

interface UserRequest {

    username: string
    senha: string
}


class CriaUserService {

    async execute({ username, senha }: UserRequest){

        if(!username){
            throw new Error("Username incorrect")
        }

        const userJaExiste = await prismaClient.user.findFirst({
            where:{
                username: username
            }
        })

        if(userJaExiste){
            throw new Error("User already exists")
        }

        const senhaHash = await hash(senha, 8)

        const user = await prismaClient.user.create({

            data:{
                username: username,
                senha: senhaHash
            },
            select:{
                id: true,
                username: true
            }
        })

        return user
    }
}

export { CriaUserService }