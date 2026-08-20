import { Request, Response } from "express";
import { CriaJogoService } from "../../services/jogo/CriaJogoService";

class CriaJogoController {

    async handle(req: Request, res: Response): Promise<any> {

        const { seasonId, nome, descricao, link } = req.body

        const criaJogoService = new CriaJogoService()

        if(!req.file) throw new Error("Erro ao fazer upload da imagem.")

        else {

            const { filename: capa } = req.file

            const jogo = await criaJogoService.execute({

                seasonId,
                nome,
                capa,
                descricao,
                link
            })

            return res.json(jogo)
        }
    }
}

export { CriaJogoController }