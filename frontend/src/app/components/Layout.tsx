"use client"

import { Season } from "@/models/Season"
import { useState } from "react"
import BotaoAlternarTema from "./BotaoAlternarTema"
import Navbar from "./Navbar"

interface LayoutProps {

    season?: Season
    children?: any
    className?: string
}

export default function Layout({ season, children, className }: LayoutProps) {

    const [tema, setTema] = useState<string>('')

    const capaLink = `http://localhost:3333/files/${season?.getCapa}`

    return (

        <div className={`${tema} dark:bg-background-dark min-h-screen relative`}>

            <img src={capaLink} alt="capa" className="w-full min-h-72 max-h-[500px]  object-cover"/>

            <Navbar />

            <BotaoAlternarTema tema={tema} alternarTema={() => tema === 'dark' ? setTema(''): setTema('dark')}/>

            <div className={`${className} dark:text-white md:text-lg text-base`}>
                {children}
            </div>
        </div>
    )
}