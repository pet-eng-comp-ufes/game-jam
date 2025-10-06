import { Request, Response } from "express";
import { ObtemMateriaisService } from "../../services/material/ObtemMateriaisService";

class ObtemMateriaisController {

    async handle(req: Request, res: Response): Promise<any> {
        
        const obtemMateriaisService = new ObtemMateriaisService();

        const materiais = await obtemMateriaisService.execute();

        return res.json(materiais);
    }
}

export { ObtemMateriaisController };
