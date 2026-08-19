import { Request, Response } from "express";
import { CriaEquipeService } from "../../services/equipe/CriaEquipeService";
import prismaClient from "../../prisma";

class CriaEquipeController {
  // Usando arrow function para manter o 'this' correto e evitar bind
  handle = async (req: Request, res: Response) => {
    try {
      const { nome } = req.body;

      if (!nome || nome.trim() === "") {
        return res.status(400).json({ error: "O nome da equipe é obrigatório." });
      }

      // Pegar a temporada atual
      const seasonAtual = await prismaClient.season.findFirst({
        where: { atual: true },
      });

      if (!seasonAtual) {
        return res.status(400).json({ error: "Nenhuma temporada atual encontrada." });
      }

      // Esta rota e publica, porque ninguem tem login antes de se inscrever.
      // A guarda contra escrita fora do periodo e a flag da propria temporada.
      if (!seasonAtual.inscricoesAbertas) {
        return res.status(403).json({ error: "As inscrições não estão abertas." });
      }

      const criaEquipeService = new CriaEquipeService();
      const equipe = await criaEquipeService.execute({
        nome,
        seasonId: seasonAtual.id,
      });

      return res.status(201).json(equipe);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao criar equipe." });
    }
  };
}

export { CriaEquipeController };
