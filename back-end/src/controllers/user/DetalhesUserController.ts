import { Request, Response } from "express";
import { DetalhesUserService } from "../../services/user/DetalhesUserService";

class DetalhesUserController {

    async handle(req: Request, res: Response): Promise<any>{

        const user_id = req.user_id

        const detalhesUserService = new DetalhesUserService()

        const user = await detalhesUserService.execute(user_id)

        return res.json(user)
    }
}

export { DetalhesUserController }