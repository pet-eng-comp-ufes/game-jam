import { Request, Response } from "express";
import { CriaSeasonService } from "../../services/season/CriaSeasonService";

class CriaSeasonController {

    async handle(req: Request, res: Response): Promise<any> {

        const { numero, numParticipantesPorEquipe } = req.body

        const criaSeasonService = new CriaSeasonService()

        if(!req.file) throw new Error("Erro ao fazer upload da imagem.")

        else {

            const { filename: capa } = req.file

            console.log(capa)

            const season = await criaSeasonService.execute({

                numero,
                capa,
                numParticipantesPorEquipe
            })

            return res.json(season)
        }
    }
}

export { CriaSeasonController }