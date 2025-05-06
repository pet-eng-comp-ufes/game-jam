"use client"

import { useState, useEffect } from "react"
import { Season } from "@/models/Season"
import Layout from "../components/Layout"
import { Jogo } from "@/models/Jogos"

export default function Jogos() {

    const [seasons, setSeasons] = useState<Season[]>()

    const [seasonSelecionada, setSeasonSelecionada] = useState<Season>()

    async function carregaSeasons() {

        const response = await Season.obtemTodosComJogos()
        setSeasons(response)
    }

    useEffect(() => {
        carregaSeasons()
    }, [])

    return (

        <Layout titulo="Jogos">

            <select name="" id="">
                {
                    seasons?.map((season) => {

                        return <option key={season.getId} onClick={() => setSeasonSelecionada(season)}>Season {season.getNumero}</option>
                    })
                }
            </select>

            <span>{seasonSelecionada?.getNumero}</span>

        </Layout>
    )
}