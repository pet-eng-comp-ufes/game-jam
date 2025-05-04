import { Request, Response } from "express";
import { ObtemSeasonsComJogosService } from "../../services/season/ObtemSeasonsComJogosService";

class ObtemSeasonsComJogosController {

    async handle(req: Request, res: Response): Promise<any> {

        const obtemSeasonsComJogosService = new ObtemSeasonsComJogosService()

        const seasons = await obtemSeasonsComJogosService.execute()

        return res.json(seasons)
    }
}

export { ObtemSeasonsComJogosController }