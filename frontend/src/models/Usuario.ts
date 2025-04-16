import { getCookieClient } from "@/lib/cookieClient"
import { api } from "@/services/api"
import { toast } from "sonner"

class Usuario {

    private id?: string
    private username: string
    private senha?: string

    constructor(username: string, id?: string, senha?: string) {

        this.id = id
        this.username = username
        this.senha = senha
    }

    get getId() {
        return this.id
    }

    get getUsername() {
        return this.username
    }

    static fromJson(json: any): Usuario {
        return new Usuario(json.username, json.id)
    }

    static async obtemTodos() {

        const token = getCookieClient()
        
        if(!token) return

        try {
            const response = await api.get("/users", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            return response.data
        }
        catch(err) {
            console.log(err)
        }
    }

    async cadastrar() {

        const token = getCookieClient()
        
        if(!token) return

        try {
            await api.post("/users", {
                username: this.username,
                senha: this.senha
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })

            toast.success('Usuário cadastrado com sucesso!')
        }
        catch(err) {
            toast.warning('Erro ao cadastrar usuário.')
            console.log(err)
            return
        }
    }

    async deletar() {

        const token = getCookieClient()
        
        if(!token) return

        try {
            await api.delete("/users", {
                params: {
                    id: this.id
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success('Usuário deletado com sucesso!')
        }
        catch(err) {
            console.log(err)
            return
        }
    }
}

export { Usuario }