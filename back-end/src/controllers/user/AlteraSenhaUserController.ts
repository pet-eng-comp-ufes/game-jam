import { Request, Response } from "express";
import { AlteraSenhaUserService } from "../../services/user/AlteraSenhaUserService";

class AlteraSenhaUserController {

    async handle(req: Request, res: Response): Promise<any>{

        const { senha } = req.body

        // O id vem do TOKEN, nunca do corpo. Antes vinha de req.body, e o
        // efeito era que qualquer pessoa autenticada podia trocar a senha de
        // qualquer outra — sem saber a senha antiga, e sem deixar rastro de
        // quem fez. O painel so mandava o proprio id, entao nada quebrou; mas
        // a API aceitava o que mandassem.
        const id = req.user_id

        const alteraSenhaUserService = new AlteraSenhaUserService()

        const user = await alteraSenhaUserService.execute({
            id,
            senha
        })

        return res.json(user)
    }
}

export { AlteraSenhaUserController }
