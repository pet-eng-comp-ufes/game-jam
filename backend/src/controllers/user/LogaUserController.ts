import { Request, Response } from "express";
import { LogaUserService } from "../../services/user/LogaUserService";

class LogaUserController {

    async handle(req: Request, res: Response): Promise<any>{
        
        const { username, senha } = req.body

        const logaUserService = new LogaUserService()

        const login = await logaUserService.execute({ 
            username, 
            senha
        })

        return res.json(login)
    }
}

export { LogaUserController }