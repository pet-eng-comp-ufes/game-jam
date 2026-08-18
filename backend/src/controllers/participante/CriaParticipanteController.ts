import { Request, Response } from "express";
import { CriaParticipanteService } from "../../services/participante/CriaParticipanteService";
import prismaClient from "../../prisma";

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

      // Esta rota e publica de proposito, entao o equipeId vem do cliente e precisa
      // ser conferido: a equipe tem que existir, a temporada dela tem que estar com
      // inscricoes abertas, e o limite de participantes por equipe tem que ser respeitado.
      const equipe = await prismaClient.equipe.findUnique({
        where: { id: equipeId },
        include: { season: true, participantes: true },
      });

      if (!equipe) {
        return res.status(400).json({ error: "Equipe não encontrada." });
      }

      if (!equipe.season.inscricoesAbertas) {
        return res.status(403).json({ error: "As inscrições não estão abertas." });
      }

      const limite = Number(equipe.season.numParticipantesPorEquipe);

      if (Number.isFinite(limite) && limite > 0 && equipe.participantes.length >= limite) {
        return res.status(409).json({
          error: `A equipe já atingiu o limite de ${limite} participantes.`,
        });
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
