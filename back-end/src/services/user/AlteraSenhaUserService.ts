import prismaClient from "../../prisma"
import { hash } from "bcryptjs"

interface UserRequest {

    id: string
    senha: string
}


class AlteraSenhaUserService {

    async execute({ id, senha }: UserRequest){

        if(!senha || senha.length < 8){
            throw new Error("Password invalid")
        }

        const senhaHash = await hash(senha, 8)

        const user = await prismaClient.user.update({

            where:{
                id: id
            },
            data:{
                senha: senhaHash
            },
            // Sem este select, o update devolve a linha inteira — inclusive o
            // hash bcrypt da senha recem-criada — no corpo da resposta.
            select:{
                id: true,
                username: true
            }
        })

        return user
    }
}

export { AlteraSenhaUserService }