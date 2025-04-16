"use client"

import Menu from "../components/Menu";
import { useEffect, useState } from "react"
import Titulo from "../components/Título";
import { IconeLixeira } from "../components/Icones";
import { Usuario } from "@/models/Usuario";
import { toast } from "sonner";
import FormCadastrarUsuario from "../components/FormCadastrarUsuario";

export default function Admin() {

    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    const [abreCadastro, setAbreCadastro] = useState(false)

    async function deletaUsuario(usuario: Usuario) {

        await usuario.deletar()

        obtemUsuarios()
    }

    async function cadastrarUsuario(username:string, senha:string) {

        if(username === '' || senha === '') return

        const usuario = new Usuario(username, undefined, senha)

        await usuario.cadastrar()
    }
    
    async function obtemUsuarios() {

        await Usuario.obtemTodos().then(users => {

            const vetor: Usuario[] = []

            users.map((u:any) => {

                vetor.push(new Usuario(u.username, u.id))
            })

            setUsuarios(vetor)
        })
    }

    useEffect(() => {
        obtemUsuarios()
    }, [])


    function renderizaUsuarios() {

        return usuarios.map((usuario, i) => {

            return(

            <tr key={usuario.getId}>

                <td className={`w-[200px] p-2 text-lg ${((i+1) % 2) ? 'bg-gray-300' : 'bg-gray-200'}`}>
                    {usuario.getUsername}
                </td>
                <td className={`w-[200px] p-2 text-lg ${((i) % 2) ? 'bg-gray-300' : 'bg-gray-200'} `}>
                        <button onClick={() => deletaUsuario(usuario)} className="hover:text-red-500 hover:bg-blue-950 p-2 rounded-full">
                            {IconeLixeira}
                        </button>
                </td>
            </tr>

            )
        })
    }

    return (

        <div className="flex">
            <Menu />

            {abreCadastro ? <FormCadastrarUsuario cadastrarUsuario={cadastrarUsuario} fechar={() => setAbreCadastro(false)}/> : false}

            <div className="flex flex-col border p-10 w-full bg-gray-200">

                <Titulo valor="Usuários"/>

                <p className="mb-10">
                    Nesta seção, você pode gerenciar os usuários que tem acesso ao sistema.
                </p>

                <button onClick={() => setAbreCadastro(true)} className="w-max text-white font-bold bg-blue-950 p-3 rounded-md hover:bg-blue-900 duration-300 mb-5">Cadastrar Usuário</button>

                <table className="w-1/2 rounded-xl">
                    <thead className="font-bold bg-blue-950 text-white">
                        <tr>
                            <th className="rounded-tl-xl p-2">username</th>
                            <th className="rounded-tr-xl p-2">ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderizaUsuarios()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}