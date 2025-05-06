import prismaClient from "../../prisma";

interface JogoRequest {

    id: string
}

class DeletaJogoService {

    async execute({ id }: JogoRequest) {


        const jogo = await prismaClient.jogo.delete({

            where: {
                id
            }
        })

        const fs = require('fs')
        const path = require('path')

        if (jogo.capa) {
            const imagePath = path.join(__dirname, '..', '..', '..', 'tmp', jogo.capa);
            fs.unlink(imagePath, (err) => {
              if (err) console.error('Erro ao deletar imagem:', err);
              else console.log('Imagem deletada com sucesso.');
            });
        }

        return jogo
    }
}

export { DeletaJogoService }