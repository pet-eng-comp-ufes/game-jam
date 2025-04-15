"use client"

import Menu from "../components/Menu";
import { getCookieClient } from "@/lib/cookieClient"
import { useEffect, useState } from "react"
import { api } from "@/services/api"
import Titulo from "../components/Título";
import { IconeLixeira } from "../components/Icones";
import { useRouter } from "next/navigation";

interface Usuario {

    id: string
    username: string
}

export default function Admin() {

    const router = useRouter()
    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    async function deletaUsuario(id: string) {

        console.log(id)
        
        const token = getCookieClient()

        if(!token) return

        try {
            await api.delete("/users", {
                params: {
                    id: id
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            alert("Usuário deletado com sucesso!")
        }
        catch(err) {
            alert('Ocorreu um erro ao deletar.')
            console.log(err)
        }

        obtemUsuarios()
    }
    
    async function obtemUsuarios() {
        
        const token = getCookieClient()

        if(!token) return

        try {
            const response = await api.get("/users", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setUsuarios(response.data)
        }
        catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        obtemUsuarios()
    }, [])


    function renderizaUsuarios() {

        return usuarios.map((usuario, i) => {

            return(

            <tr key={usuario.id}>

                <td className={`w-[200px] p-2 text-lg ${((i+1) % 2) ? 'bg-gray-300' : 'bg-gray-200'}`}>
                        {usuario.username}
                </td>
                <td className={`w-[200px] p-2 text-lg ${((i) % 2) ? 'bg-gray-300' : 'bg-gray-200'} `}>
                        <span onClick={() => deletaUsuario(usuario.id)} className="hover:text-red-500 cursor-pointer">{IconeLixeira}</span>
                </td>
            </tr>

            )
        })
    }

    return (

        <div className="flex">
            <Menu />

            <div className="flex flex-col border p-10 w-full bg-gray-200">

                <Titulo valor="Usuários"/>

                <p className="mb-10">
                    Nesta seção, você pode gerenciar os usuários que tem acesso ao sistema.
                </p>

                <table className="w-1/2">
                    <thead className="font-bold">
                        <tr>
                            <td>username</td>
                            <td>ações</td>
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