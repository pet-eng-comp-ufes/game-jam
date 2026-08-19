import { getCookieClient } from "@/lib/cookieClient"
import { api } from "@/services/api"
import { toast } from "sonner"

class Jogo {

    private id?: string
    private nome: string
    private capa: string
    private descricao: string
    private link: string

    constructor(nome: string, capa: string, descricao: string, link: string, id?: string) {

        this.id = id
        this.nome = nome
        this.capa = capa
        this.descricao = descricao
        this.link = link
    }

    get getId() {
        return this.id
    }

    get getNome() {
        return this.nome
    }

    get getCapa() {
        return this.capa
    }

    get getDescricao() {
        return this.descricao
    }

    get getLink() {
        return this.link
    }

    static async cadastrar(data: FormData) {

        const token = getCookieClient()
        
        if(!token) return

        try {
            await api.post("/jogos", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })

            toast.success('Jogo cadastrado com sucesso!')
        }
        catch(err) {
            toast.warning('Erro ao cadastrar Jogo.')
            console.log(err)
            return
        }
    }

    async deletar() {

        const token = getCookieClient()
        
        if(!token) return

        try {
            await api.delete("/jogos", {
                params: {
                    id: this.id
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success('Jogo deletado com sucesso!')
        }
        catch(err) {
            console.log(err)
            return
        }
    }
}

export { Jogo }