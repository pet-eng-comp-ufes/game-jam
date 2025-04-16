import prismaClient from "../../prisma"
import { hash } from "bcryptjs"

interface UserRequest {

    id: string
    senha: string
}


class AlteraSenhaUserService {

    async execute({ id, senha }: UserRequest){

        if(!senha){
            throw new Error("Password invalid")
        }

        const senhaHash = await hash(senha, 8)

        const user = await prismaClient.user.update({

            where:{
                id: id
            },
            data:{
                senha: senhaHash
            }
        })

        return user
    }
}

export { AlteraSenhaUserService }