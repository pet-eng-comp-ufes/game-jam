import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface LoginRequest{

    username: string
    senha: string
}

// Hash descartavel, gerado com o mesmo custo dos reais (bcryptjs, fator 8).
// Nao corresponde a senha de ninguem; serve so para o caminho "usuario nao
// existe" gastar o mesmo tempo do caminho "senha errada".
//
// Antes o servico devolvia o erro na hora quando nao achava o usuario, e so
// pagava os ~30ms do bcrypt quando o usuario existia. A mensagem era a mesma
// nos dois casos, mas o relogio nao: bastava cronometrar as respostas para
// descobrir quais nomes de usuario existem, e ai gastar as tentativas so
// nesses.
const HASH_DESCARTAVEL = "$2b$08$AbPU45FXVPpxkhX43gOEhOxxRgcJa4Izm25Zakcb2KhpuxAchLPcy"

class LogaUserService {

    async execute({ username, senha }: LoginRequest){

        // findUnique, e nao findFirst: o username passou a ser unico no schema.
        const user = await prismaClient.user.findUnique({

            where: {
                username: username
            }
        })

        if(!user){

            // Compara contra o hash descartavel so para gastar o tempo. O
            // resultado e ignorado — o erro e o mesmo de senha errada.
            await compare(senha, HASH_DESCARTAVEL)

            throw new Error("User or password incorrect.")
        }

        const senhaMatch = await compare(senha, user.senha)

        if(!senhaMatch) throw new Error("User or password incorrect.")

        const token = sign(
            {
                username: user.username
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                // Era 30d. Nao existe revogacao nem refresh: um token vazado
                // valia um mes e nao havia como cancela-lo sem trocar o
                // JWT_SECRET, o que derruba a sessao de todo mundo. Um dia
                // cobre a jornada de quem organiza o evento e limita a janela.
                expiresIn: '1d'
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
