"use client"

import Menu from "./components/Menu";
import { getCookieClient } from "@/lib/cookieClient"
import { useEffect, useState } from "react"
import { api } from "@/services/api"
import Titulo from "./components/Título";

export default function Admin() {

    const [username, setUsername] = useState('')
    
    async function detalhesUsuario() {
        
        const token = getCookieClient()

        if(!token) return

        try {
            const response = await api.get("/eu", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            setUsername(response.data.username)
        }
        catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        detalhesUsuario()
    }, [])

    return (

        <div className="flex">
            <Menu />

            <div className="flex flex-col border p-10 w-full bg-gray-200">

                <Titulo valor={`Olá, ${username}!`}/>

                <p>
                    Seja bem-vindo(a) à área administrativa do site do Game Jam! Fique atento nas orientações abaixo para garantir que tudo funcione corretamente.
                </p>
            </div>
        </div>
    )
}