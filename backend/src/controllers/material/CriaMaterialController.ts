import { Request, Response } from "express";
import { CriaMaterialService } from '../../services/material/CriaMaterialService';

class CriaMaterialController {

    async handle(req: Request, res: Response) : Promise<any>{

        const { nome, descricao, link } = req.body
        
        const createMaterialService = new CriaMaterialService()

        const material = await createMaterialService.execute({

            nome,
            descricao,
            link
        })

        return res.json(material)
    }
}

export { CriaMaterialController }

