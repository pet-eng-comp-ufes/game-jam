import prismaClient from "../../prisma";

interface EquipeRequest {

  nome: string;
  seasonId: string;
  aprovada?: boolean;
}

class CriaEquipeService {

  async execute({ nome, seasonId, aprovada = false }: EquipeRequest) {

    const equipe = await prismaClient.equipe.create({
        
      data: {
        nome,
        seasonId,
        aprovada,
      },
    });

    return equipe;
  }
}

export { CriaEquipeService };
