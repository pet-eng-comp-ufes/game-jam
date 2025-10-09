import { getCookieClient } from "@/lib/cookieClient"
import { api } from "@/services/api"
import { toast } from "sonner"

class Equipe {

    private id?: string
    private nome: string
    private aprovada?: boolean
    private createdAt?: string
    private updatedAt?: string

    constructor(nome: string, id?: string, aprovada?: boolean, createdAt?: string, updatedAt?: string) {

        this.id = id
        this.nome = nome
        this.aprovada = aprovada
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }

    get getId() {
        return this.id
    }

    get getNome() {
        return this.nome
    }

    get getAprovada() {
        return this.aprovada
    }

    get getCreatedAt() {
        return this.createdAt
    }

    get getUpdatedAt() {
        return this.updatedAt
    }

    static async cadastrar(nome: string) {

        try {
            const response = await api.post("/equipe", { nome })

            return new Equipe(response.data.nome, response.data.id, response.data.aprovada, response.data.createdAt, response.data.updatedAt)
        }
        catch(err) {
            toast.error('Erro ao cadastrar equipe.')
            console.log(err)
            return
        }
    }

    async deletar() {

        const token = getCookieClient()
        
        if (!token || !this.id) return

        try {
            await api.delete("/equipe", {
                params: { id: this.id },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success('Equipe deletada com sucesso!')
        }
        catch(err) {
            console.log(err)
            toast.error('Erro ao deletar equipe.')
            return
        }
    }
}

export { Equipe }
