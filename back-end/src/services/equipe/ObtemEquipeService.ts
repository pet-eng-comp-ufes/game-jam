import prismaClient from "../../prisma";

class ObtemEquipesService {

  async execute() {
    
    const equipes = await prismaClient.equipe.findMany({
      include: {
        participantes: true, // inclui os participantes de cada equipe
      },
    });

    return equipes;
  }
}

export { ObtemEquipesService };
