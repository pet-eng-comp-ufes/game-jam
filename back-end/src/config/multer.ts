import multer from "multer";
import crypto from 'crypto'

import { resolve } from "path";

// So imagem entra. As tres rotas de upload recebem capa de temporada, capa de
// jogo e logo de patrocinador — nada mais.
//
// SVG fica de fora de proposito: o /files serve da mesma origem da API, e SVG
// nao e so imagem, e um documento que pode executar script no navegador de quem
// abrir o arquivo.
export const TIPOS_ACEITOS = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']

// As imagens que estao em producao hoje tem centenas de KB. 5 MB e folgado para
// o uso real e impede que um envio unico encha o volume vol-imgs-tmp.
export const TAMANHO_MAXIMO_MB = 5

export default {

    upload(folder: string): multer.Options {

        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..', '..', folder),
                filename: (request, file, callback) => {
                    const fileHash = crypto.randomBytes(16).toString("hex")
                    const fileName = `${fileHash}-${file.originalname}`

                    return callback(null, fileName)
                }
            }),

            limits: {
                fileSize: TAMANHO_MAXIMO_MB * 1024 * 1024,
                files: 1
            },

            fileFilter: (request, file, callback) => {
                if (!TIPOS_ACEITOS.includes(file.mimetype)) {
                    return callback(new Error(
                        `Tipo de arquivo nao aceito: ${file.mimetype}. Envie uma imagem JPEG, PNG, WebP ou GIF.`
                    ))
                }

                return callback(null, true)
            }
        }
    }
}
