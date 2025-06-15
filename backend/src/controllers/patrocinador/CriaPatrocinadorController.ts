import { Request, Response } from "express";
import { CriaPatrocinadorService } from '../../services/patrocinador/CriaPatrocinadorService'

class CriaPatrocinadorController {
    
    async handle(req: Request, res: Response) : Promise<any>{

        const{nome} = req.body
        
        const createPatrocinadorService = new CriaPatrocinadorService();

        if(!req.file){
            throw new Error("error upload file");
        }
        else{
            const{filename: logo} = req.file;

            const patrocinador = await createPatrocinadorService.execute({
                nome,
                logo
            });
    
            return res.json(patrocinador);
        }
    }
}

export { CriaPatrocinadorController }

