import { Request, Response } from "express";
import { ObtemAtualSeasonService } from "../../services/season/ObtemAtualSeasonService";

class ObtemAtualSeasonController {

    async handle(req: Request, res: Response): Promise<any> {

        const obtemAtualSeasonService = new ObtemAtualSeasonService()

        const seasonAtual = await obtemAtualSeasonService.execute()

        return res.json(seasonAtual)
    }
}

export { ObtemAtualSeasonController }