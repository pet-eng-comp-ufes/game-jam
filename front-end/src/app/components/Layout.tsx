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

        <div className="relative flex min-h-screen flex-col bg-fundo">

            <Navbar />

            {capaLink && <img src={capaLink} alt="Capa da temporada" className="max-h-[500px] min-h-72 w-full object-cover"/>}

            <main className={`flex-1 ${className ?? ""}`}>
                {children}
            </main>

            <Footer />
        </div>
    )
}
