import { api } from "@/services/api"
import { toast } from "sonner"

interface FormInscricaoProps {

    numParticipantesPorEquipe: number
}

interface Participante {

    nome: string
    email: string
    genero: string
    ufes: boolean
}

interface Equipe {

    id: string
    nome: string
}

export default function FormInscricao({ numParticipantesPorEquipe }: FormInscricaoProps) {

    async function handleSubmit(formData: FormData) {

        var podeInscrever = true
        const listaParticipantes: Participante[] = []

        const nomeEquipe = formData.get('equipe')

        if(nomeEquipe === '') {
            toast.warning('Preencha o nome da equipe!')
            return
        }

        for (let index = 1; index <= numParticipantesPorEquipe; index++) {
            const nome = formData.get('nome' + index) as string
            const email = formData.get('email' + index) as string
            const genero = formData.get('genero' + index) as string
            const ufes = formData.get('ufes' + index) as string

            const ufesBoolean: boolean = ufes === 'sim' ? true : false

            if((nome === '' || email === '') && index === 1) {
                toast.warning('A equipe deve ter ao menos 1 participante!')
                var podeInscrever = false
                break
            }

            if((nome != ''  && email === '') || (nome === '' && email != '')) {
                toast.warning('Preencha todos os dados de um participante!')
                podeInscrever = false
                break
            }

            if(nome === '' || email === '') break

            const participante: Participante = {
                nome,
                email,
                genero,
                ufes: ufesBoolean
            }

            listaParticipantes.push(participante)
        }

        if(podeInscrever) {
            
            try {

                const equipeJson = await api.post("/equipe", {nome: nomeEquipe})
                const equipe = equipeJson.data as Equipe

                listaParticipantes.map(async (p) => {

                    try {

                        await api.post("/participante", {
                            nome: p.nome,
                            email: p.email,
                            genero: p.genero,
                            ufes: p.ufes,
                            equipeId: equipe.id
                        })
                    }
                    catch(err) {
                        console.log(err)
                        toast.warning('Ocorreu um erro ao solicitar a inscrição. Tente novamente!')
                    }
                })

                toast.success('Inscrição solicitada com sucesso!')
            }
            catch(err) {
                console.log(err)
                toast.warning('Ocorreu um erro ao solicitar a inscrição. Tente novamente!')
            }
        }
    }

    const participantesForm = []

    if(numParticipantesPorEquipe) {

        for (let index = 1; index <= numParticipantesPorEquipe; index++) {
            const form = (
                <div key={index}>

                    <div className="mt-11 flex flex-col gap-2">

                        <span className="text-xl font-bold">Participante {index}</span>
                        <input type="text"
                        placeholder="nome"
                        name={'nome' + index}
                        className="w-full h-11 bg-gray-200 text-black p-3 rounded-lg mb-3"/>
                        <input type="email"
                        name={'email' + index}
                        placeholder="email"
                        className="w-full h-11 bg-gray-200 text-black p-3 rounded-lg mb-3"/>

                        <div className="flex">
                            <label htmlFor={'genero' + index} className="mr-2">Gênero: </label>
                            <select name={'genero' + index} id={'genero' + index} className="bg-gray-200 outline-0 text-black mr-6">
                                <option value="feminino">Feminino</option>
                                <option value="masculino">Masculino</option>
                                <option value="outros">Outros</option>
                            </select>

                            <label htmlFor={'ufes' + index} className="mr-2">É estudante da Ufes? </label>
                            <select name={'ufes' + index} id={'ufes' + index} className="bg-gray-200 outline-0 text-black">
                                <option value={'sim'}>Sim</option>
                                <option value={'nao'}>Não</option>
                            </select>
                        </div>
                    </div>
                </div> 
            )
            
            participantesForm.push(form)
        }
    }

    return (

        <form action={handleSubmit} className="flex flex-col w-[80%]" id="formIsncricao">

            <label htmlFor="equipe"  className="mb-3 text-xl font-bold">Qual o nome da sua equipe?</label>
            <input type="text" name="equipe" id="equipe" placeholder="nome da equipe"
            className="w-full h-11 bg-gray-200 text-black p-3 rounded-lg"/>

            {
                participantesForm
            }

            <button name="botao" type="submit" 
            className="mt-11 bg-gray-200 text-black p-3 rounded-lg w-max mx-auto font-bold hover:scale-105 duration-300">
                Solicitar inscrição
            </button>
        </form>
    )
}