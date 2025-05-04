import prismaClient from "../../prisma"

interface SeasonRequest {

    id: string
}

class DeletaSeasonService {

    async execute({ id }: SeasonRequest){

        const season = await prismaClient.season.delete({
            where:{
                id: id
            }
        })

        const fs = require('fs')
        const path = require('path')

        if (season.capa) {
            const imagePath = path.join(__dirname, '..', '..', '..', 'tmp', season.capa);
            fs.unlink(imagePath, (err) => {
              if (err) console.error('Erro ao deletar imagem:', err);
              else console.log('Imagem deletada com sucesso.');
            });
        }

        return season
    }
}

export { DeletaSeasonService }