import { Request, Response } from "express";
import { DeletaMaterialService } from "../../services/material/DeletaMaterialService";

class DeletaMaterialController {

    async handle(req: Request, res: Response): Promise<any> {

        const id = req.query.id as string

        const deletaMaterialService = new DeletaMaterialService()

        const material = await deletaMaterialService.execute({
            id
        })
        
        return res.json(material)
    }
}

export { DeletaMaterialController }