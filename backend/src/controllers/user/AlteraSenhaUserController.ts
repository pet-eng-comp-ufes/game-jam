import { Request, Response } from "express";
import { AlteraSenhaUserService } from "../../services/user/AlteraSenhaUserService";

class AlteraSenhaUserController {

    async handle(req: Request, res: Response): Promise<any>{
        
        const { id, senha } = req.body

        const alteraSenhaUserService = new AlteraSenhaUserService()

        const user = await alteraSenhaUserService.execute({
            id, 
            senha
        })

        return res.json(user)
    }
}

export { AlteraSenhaUserController }