import { Request, Response } from "express";
import { ObtemUsersService } from "../../services/user/ObtemUsersService";

class ObtemUsersController {

    async handle(req: Request, res: Response): Promise<any> {

        const obtemUsersService = new ObtemUsersService()

        const users = await obtemUsersService.execute()

        return res.json(users)
    }
}

export { ObtemUsersController }