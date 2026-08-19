import { Request, Response } from "express";
import { DeletaSeasonService } from "../../services/season/DeletaSeasonService";

class DeletaSeasonController {

    async handle(req: Request, res: Response): Promise<any> {

        const id = req.query.id as string

        const deletaSeasonService = new DeletaSeasonService()

        const season = await deletaSeasonService.execute({

            id
        })

        return res.json(season)
        
    }
}

export { DeletaSeasonController }