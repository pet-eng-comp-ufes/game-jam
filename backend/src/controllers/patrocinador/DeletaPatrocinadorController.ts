import { Request, Response } from 'express';
import { DeletaPatrocinadorService } from "../../services/patrocinador/DeletaPatrocinadorService";


class DeletaPatrocinadorController {

    async handle(req: Request, res: Response): Promise<any>{
        
        const id = req.query.id as string;

        const deletaPatrocinadorService = new DeletaPatrocinadorService()

        const patrocinador = await deletaPatrocinadorService.execute({
            id
        })

        return res.json(patrocinador)
    }
    
}

export {  DeletaPatrocinadorController  }