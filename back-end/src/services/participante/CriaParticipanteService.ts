import prismaClient from "../../prisma";

interface ParticipanteRequest {
  nome: string;
  email: string;
  genero: string;
  ufes: boolean;
  cpf?: string;
  curso?: string;
  instituicao?: string;
  equipeId: string;
}

class CriaParticipanteService {
  async execute({
    nome,
    email,
    genero,
    ufes,
    cpf,
    curso,
    instituicao,
    equipeId,
  }: ParticipanteRequest) {
    const participante = await prismaClient.participante.create({
      data: {
  nome,
  email,
  genero,
  ufes,
  ...(cpf ? { cpf } : {}),
  ...(curso ? { curso } : {}),
  ...(ufes ? {} : { instituicao }),
  equipeId,
}
    });

    return participante;
  }
}

export { CriaParticipanteService };
