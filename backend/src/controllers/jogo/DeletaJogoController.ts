import { Request, Response } from "express";
import { DeletaJogoService } from "../../services/jogo/DeletaJogoService";

class DeletaJogoController {

    async handle(req: Request, res: Response): Promise<any> {

        const id = req.query.id as string

        const deletaJogoService = new DeletaJogoService()

        const jogo = await deletaJogoService.execute({
            id
        })

        return res.json(jogo)
    }
}

export { DeletaJogoController }