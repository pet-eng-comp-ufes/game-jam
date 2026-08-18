import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'
import path from 'path'

import { router } from './routes'

const app = express()

// A API roda atras do Traefik, que termina o TLS e repassa em HTTP. Sem isto o
// req.protocol devolve 'http', e a URL do logo do patrocinador vira conteudo
// misto numa pagina servida em https.
app.set('trust proxy', 1)
app.use(express.json())
app.use(cors())

app.use(router)

app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
)

app.use((err: Error, req: Request, res: Response, next: NextFunction): any => {

    if(err instanceof Error){

        // Erro vindo do Prisma nao pode ser devolvido cru: a mensagem dele carrega
        // o caminho do arquivo, o trecho da query e o nome das colunas. Fica no log
        // do servidor e o cliente recebe uma mensagem generica.
        if(err.constructor.name.startsWith('PrismaClient')){
            console.error(err)

            return res.status(500).json({
                status: 'error',
                message: 'Internal server error.'
            })
        }

        // Erro lancado pelos services e mensagem de validacao, feita para o cliente ler.
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })
})

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log('Server Online!'))