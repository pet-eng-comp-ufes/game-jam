import { Request, Response } from "express";
import { AtualSeasonService } from "../../services/season/AtualSeasonService";

class AtualSeasonController {

    async handle(req: Request, res: Response): Promise<any> {

        const id = req.query.id as string

        const atualSeasonService = new AtualSeasonService()

        const season = await atualSeasonService.execute({

            id
        })

        return res.json(season)
        
    }
}

export { AtualSeasonController }