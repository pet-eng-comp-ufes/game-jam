import { Request, Response } from "express";
import { ObtemSeasonsService } from "../../services/season/ObtemSeasonsService";

class ObtemSeasonsController {

    async handle(req: Request, res: Response): Promise<any> {

        const obtemSeasonsService = new ObtemSeasonsService()

        const seasons = await obtemSeasonsService.execute()

        return res.json(seasons)
    }
}

export { ObtemSeasonsController }