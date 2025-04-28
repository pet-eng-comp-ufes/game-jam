import { Request, Response } from "express";
import { AbreInscricaoSeasonService } from "../../services/season/AbreInscricaoSeasonService";

class AbreInscricaoSeasonController {

    async handle(req: Request, res: Response): Promise<any> {

        const id = req.query.id as string

        const abreInscricaoSeasonService = new AbreInscricaoSeasonService()

        const season = await abreInscricaoSeasonService.execute({
            id
        })

        return res.json(season)
    }
}

export { AbreInscricaoSeasonController }