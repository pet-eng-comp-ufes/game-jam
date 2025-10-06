import { getCookieClient } from "@/lib/cookieClient"
import { api } from "@/services/api"
import { toast } from "sonner"

interface ParticipanteData {

    nome: string
    email: string
    genero: string
    ufes: boolean
    cpf?: string
    curso?: string
    instituicao?: string
    equipeId: string
}

class Participante {

    private id?: string
    private nome: string
    private email: string
    private genero: string
    private ufes: boolean
    private cpf?: string
    private curso?: string
    private instituicao?: string
    private equipeId: string
    private createdAt?: string
    private updatedAt?: string

    constructor(data: ParticipanteData, id?: string, createdAt?: string, updatedAt?: string) {

        this.id = id
        this.nome = data.nome
        this.email = data.email
        this.genero = data.genero
        this.ufes = data.ufes
        this.cpf = data.cpf
        this.curso = data.curso
        this.instituicao = data.instituicao
        this.equipeId = data.equipeId
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }

    get getId() { return this.id }
    get getNome() { return this.nome }
    get getEmail() { return this.email }
    get getGenero() { return this.genero }
    get getUfes() { return this.ufes }
    get getCpf() { return this.cpf }
    get getCurso() { return this.curso }
    get getInstituicao() { return this.instituicao }
    get getEquipeId() { return this.equipeId }
    get getCreatedAt() { return this.createdAt }
    get getUpdatedAt() { return this.updatedAt }

    static async cadastrar(data: ParticipanteData) {

        const token = getCookieClient()

        if (!token) return

        try {
            const response = await api.post("/participante", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            toast.success('Participante cadastrado com sucesso!')
            return new Participante(response.data, response.data.id, response.data.createdAt, response.data.updatedAt)
        }
        catch(err) {
            console.error(err)
            toast.error('Erro ao cadastrar participante.')
            return
        }
    }

    async deletar() {

        const token = getCookieClient()

        if (!token || !this.id) return

        try {
            await api.delete("/participante", {
                params: { id: this.id },
                headers: { Authorization: `Bearer ${token}` }
            })
            toast.success('Participante deletado com sucesso!')
        }
        catch(err) {
            console.error(err)
            toast.error('Erro ao deletar participante.')
            return
        }
    }
}

export { Participante }
