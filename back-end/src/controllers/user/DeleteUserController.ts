import { Request, Response } from "express";
import { DeleteUserService } from "../../services/user/DeleteUserService";

class DeleteUserController {

    async handle(req: Request, res: Response): Promise<any> {

        const id = req.query.id as string

        const deleteUserService = new DeleteUserService()

        const user = await deleteUserService.execute({id})

        return res.json(user)
    }
}

export { DeleteUserController }