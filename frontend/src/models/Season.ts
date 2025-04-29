import { getCookieClient } from "@/lib/cookieClient"
import { api } from "@/services/api"
import { toast } from "sonner"

class Season {

    private id?: string
    private numero: number
    private capa: string
    private numParticipantesPorEquipe: number
    private atual: boolean
    private inscricoesAbertas: boolean

    constructor(numero: number, capa: string, numParticipantesPorEquipe: number, atual: boolean, inscricoesAbertas: boolean, id?: string) {

        this.id = id
        this.numero = numero
        this.capa = capa
        this.numParticipantesPorEquipe = numParticipantesPorEquipe
        this.atual = atual
        this.inscricoesAbertas = inscricoesAbertas
    }

    get getId() {
        return this.id
    }

    get getNumero() {
        return this.numero
    }

    get getCapa() {
        return this.capa
    }

    get getNumParticipantesPorEquipe() {
        return this.numParticipantesPorEquipe
    }

    get getAtual() {
        return this.atual
    }

    get getInscricoesAbertas() {
        return this.inscricoesAbertas
    }

    static async obtemTodos() {

        const token = getCookieClient()
                
        if(!token) return

        try {
            const response = await api.get("/seasons", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const seasonsJSON = response.data

            const seasons = seasonsJSON.map((seasonJSON: any) => new Season(
                parseInt(seasonJSON.numero),
                seasonJSON.capa,
                parseInt(seasonJSON.numParticipantesPorEquipe),
                seasonJSON.atual,
                seasonJSON.inscricoesAbertas,
                seasonJSON.id
            ))

            return seasons
        }
        catch(err) {
            console.log(err)
        }
    }

    static async cadastrar(data: FormData) {

        const token = getCookieClient()
        
        if(!token) return

        try {
            await api.post("/seasons", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })

            toast.success('Season cadastrada com sucesso!')
        }
        catch(err) {
            toast.warning('Erro ao cadastrar Season.')
            console.log(err)
            return
        }
    }

    async tornaAtual() {

        const token = getCookieClient()
                
        if(!token) return

        try {
            await api.put("/seasons/atual", {}, {
                params: {
                    id: this.id
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success("Season Atual atualizada com sucesso!")
        }
        catch(err) {
            console.log(err)
        }
    }

    async abreInscricoes() {

        const token = getCookieClient()
                
        if(!token) return

        try {
            await api.put("/seasons/abreInscricao", {}, {
                params: {
                    id: this.id
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success("Incrições abertas!")
        }
        catch(err) {
            console.log(err)
        }
    }

    async fechaInscricoes() {

        const token = getCookieClient()
                
        if(!token) return

        try {
            await api.put("/seasons/fechaInscricao", {}, {
                params: {
                    id: this.id
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success("Incrições fechadas!")
        }
        catch(err) {
            console.log(err)
        }
    }

    async deletar() {

        const token = getCookieClient()
        
        if(!token) return

        try {
            await api.delete("/seasons", {
                params: {
                    id: this.id
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success('Season deletada com sucesso!')
        }
        catch(err) {
            console.log(err)
            return
        }
    }
}

export { Season }