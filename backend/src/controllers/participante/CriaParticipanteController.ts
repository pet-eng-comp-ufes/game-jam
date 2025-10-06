import { Request, Response } from "express";
import { CriaParticipanteService } from "../../services/participante/CriaParticipanteService";

class CriaParticipanteController {
  async handle(req: Request, res: Response) {
    try {
      const {
        nome,
        email,
        genero,
        ufes,
        cpf,
        curso,
        instituicao,
        equipeId,
      } = req.body;

      // Validações básicas
      if (!nome || !email || !genero || ufes === undefined || !equipeId) {
        return res.status(400).json({ error: "Campos obrigatórios faltando." });
      }

      if (!ufes && !instituicao) {
        return res.status(400).json({ error: "Informe a instituição para participantes externos." });
      }

      const criaParticipanteService = new CriaParticipanteService();

      const participante = await criaParticipanteService.execute({
        nome,
        email,
        genero,
        ufes,
        cpf,
        curso,
        instituicao,
        equipeId,
      });

      return res.status(201).json(participante);
    } catch (err: any) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao criar participante." });
    }
  }
}

export { CriaParticipanteController };
