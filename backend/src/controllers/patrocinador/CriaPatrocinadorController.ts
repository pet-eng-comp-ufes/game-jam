import { Request, Response } from "express";
import { CriaPatrocinadorService } from "../../services/patrocinador/CriaPatrocinadorService";

class CriaPatrocinadorController {
    
    async handle(req: Request, res: Response): Promise<any> {

        const { nome } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: "Arquivo de logo é obrigatório" });
        }

        const logoPath = `/files/${req.file.filename}`;

        const criaPatrocinadorService = new CriaPatrocinadorService();

        const patrocinador = await criaPatrocinadorService.execute({
            nome,
            logo: logoPath
        });

        return res.status(201).json(patrocinador);
    }
}

export { CriaPatrocinadorController };
