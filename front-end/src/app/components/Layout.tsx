"use client"

import { Season } from "@/models/Season"
import Navbar from "./Navbar"
import Footer from "./Footer"

interface LayoutProps {

    season?: Season
    children?: any
    className?: string
}

export default function Layout({ season, children, className }: LayoutProps) {

    // Sem season nao existe capa. Sem esta guarda o template literal escrevia a
    // string "undefined" na URL e a pagina mostrava imagem quebrada.
    const capaLink = season?.getCapa
        ? `${process.env.NEXT_PUBLIC_API_URL}/files/${season.getCapa}`
        : undefined

    return (
        
        <div className={`dark bg-background-dark min-h-screen relative`}>

            {capaLink && <img src={capaLink} alt="Capa da temporada" className="w-full min-h-72 max-h-[500px] object-cover"/>}

            <Navbar tema="dark" />

            <div className={`${className} dark:text-white md:text-lg text-base`}>
                {children}
            </div>

            <Footer />
        </div>
    )
}
