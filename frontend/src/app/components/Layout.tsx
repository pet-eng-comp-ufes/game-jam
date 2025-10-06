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

    const capaLink = `${process.env.NEXT_PUBLIC_API_URL}/files/${season?.getCapa}`

    return (
        
        <div className={`dark bg-background-dark min-h-screen relative`}>

            <img src={capaLink} alt="capa" className="w-full min-h-72 max-h-[500px] object-cover"/>

            <Navbar tema="dark" />

            <div className={`${className} dark:text-white md:text-lg text-base`}>
                {children}
            </div>

            <Footer />
        </div>
    )
}
