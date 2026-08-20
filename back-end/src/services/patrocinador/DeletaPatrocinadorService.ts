import prismaClient from "../../prisma";

interface PatrocinadorRequest {
    id: string
}

class DeletaPatrocinadorService {
    
    async execute({ id }: PatrocinadorRequest) {
        const patrocinador = await prismaClient.patrocinador.delete({

            where: {
                id
            }
        })

        const fs = require('fs')
        const path = require('path')

        if (patrocinador.logo) {
            const imagePath = path.join(__dirname, '..', '..', '..', 'tmp', patrocinador.logo);
            fs.unlink(imagePath, (err) => {
              if (err) console.error('Erro ao deletar imagem:', err);
              else console.log('Imagem deletada com sucesso.');
            });
        }

        return patrocinador
    }
}

export { DeletaPatrocinadorService }