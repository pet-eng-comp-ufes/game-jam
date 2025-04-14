"use client"

import MenuItem from "./MenuItem"
import { IconeUsuarios, IconeSair, IconePerfil, IconeDinheiro, IconeDocumento, IconeComputador, IconeEquipe, IconeMaterial } from "./Icones"
import { deleteCookieClient } from "@/lib/cookieClient"
import { useRouter } from "next/navigation"

export default function Menu() {

    const router = useRouter()

    async function logout() {
        
        deleteCookieClient()
        router.replace("/login")
    }

    return (

        <aside className={`
            flex flex-col h-screen
            bg-blue-950 text-white
        `}>

            <div className="h-16 p-3 flex justify-center items-center">

                <img src='logo-pet.png' alt="Logo" className="h-full"/>
            </div>
            <ul className="grow">
                <MenuItem url="/admin" texto="Usuários" icone={IconeUsuarios}/>
                <MenuItem url="/admin" texto="Season" icone={IconeComputador}/>
                <MenuItem url="/admin" texto="Equipes" icone={IconeEquipe}/>
                <MenuItem url="/admin" texto="Materiais" icone={IconeMaterial}/>
                <MenuItem url="/admin" texto="Regras" icone={IconeDocumento}/>
                <MenuItem url="/admin" texto="Patrocício" icone={IconeDinheiro}/>
            </ul>
            <ul>
                <MenuItem
                    url="/admin"
                    texto="Perfil"
                    icone={IconePerfil}
                />
                <MenuItem 
                    onClick={logout} 
                    texto="Sair" 
                    icone={IconeSair}
                    className={`
                        hover:bg-red-400 hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}