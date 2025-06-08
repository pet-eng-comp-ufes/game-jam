import { Request, Response } from "express";
import { CriaUserService } from "../../services/user/CriaUserService";

class CriaUserController {

    async handle(req: Request, res: Response): Promise<any>{
        
        const { username, senha } = req.body

        const criaUserService = new CriaUserService()

        const user = await criaUserService.execute({
            username, 
            senha
        })

        return res.json(user)
    }
}

export { CriaUserController }