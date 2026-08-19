import { Request, Response } from "express";
import { ObtemPatrocinadoresService } from "../../services/patrocinador/ObtemPatrocinadorService";

class ObtemPatrocinadoresController {

    async handle(req: Request, res: Response): Promise<any> {

        const obtemPatrocinadoresService = new ObtemPatrocinadoresService();

        const patrocinadores = await obtemPatrocinadoresService.execute();

        const host = `${req.protocol}://${req.get("host")}`;
        const patrocinadoresComUrl = patrocinadores.map(p => ({
            ...p,
            logo: `${host}${p.logo}`
        }));

        return res.json(patrocinadoresComUrl);
    }
}

export { ObtemPatrocinadoresController };
