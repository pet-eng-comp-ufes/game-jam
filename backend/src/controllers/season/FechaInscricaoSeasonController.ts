import { Request, Response } from "express";
import { FechaInscricaoSeasonService } from "../../services/season/FechaInscricaoSeasonService";

class FechaInscricaoSeasonController {

    async handle(req: Request, res: Response): Promise<any> {

        const id = req.query.id as string

        const fechaInscricaoSeasonService = new FechaInscricaoSeasonService()

        const season = await fechaInscricaoSeasonService.execute({
            id
        })

        return res.json(season)
    }
}

export { FechaInscricaoSeasonController }