"use client"

import { useState, useEffect } from "react"
import { Season } from "@/models/Season"
import Layout from "../components/Layout"
import { Jogo } from "@/models/Jogos"
import JogoComponente from "../components/JogoComponente"
import FormCadastrarJogo from "../components/FormCadastrarJogo"
import Botao from "../components/Botao"

export default function Jogos() {

    const [seasons, setSeasons] = useState<Season[]>()
    const [seasonSelecionada, setSeasonSelecionada] = useState<Season>()
    const [jogos, setJogos] = useState<Jogo[]>()
    const [exibeFormCadastro, setExibeFormCadastro] = useState(false)

    function selecionaSeason(id: string) {

        const seasonSelected = seasons?.find(season => season.getId === id)

        setSeasonSelecionada(seasonSelected)
        setJogos(seasonSelected?.getJogos)
    }

    async function cadastrarJogo(nome: string, capa: File, descricao: string, link: string) {

        const seasonId = seasonSelecionada?.getId ? seasonSelecionada.getId : ''

        const data = new FormData()
        data.append("nome", nome)
        data.append("file", capa)
        data.append("descricao", descricao)
        data.append("link", link)
        data.append("seasonId", seasonId)
        
        await Jogo.cadastrar(data)

        setExibeFormCadastro(false)
        carregaSeasons()
    }

    async function carregaSeasons() {

        const response: Season[] = await Season.obtemTodosComJogos()
        setSeasons(response)
        setSeasonSelecionada(response[0])
        setJogos(response[0].getJogos)
    }

    async function deletaJogo(jogo: Jogo) {

        console.log('entrou')

        await jogo.deletar()

        carregaSeasons()
    }

    useEffect(() => {
        carregaSeasons()
    }, [])

    return (

        <Layout 
        titulo="Jogos"
        form={exibeFormCadastro ? <FormCadastrarJogo cadastrarJogo={cadastrarJogo} fechar={() => setExibeFormCadastro(false)}/> : false}
        >

            <select 
            className={`
              flex w-max border-b border-gray-800 text-2xl focus:outline-0
              font-semibold mb-10
            `}
            onChange={(e) => selecionaSeason(e.target.value)}>
                {
                    seasons?.map((season) => {

                        return <option className="text-lg" key={season.getId} value={season.getId}>Season {season.getNumero}</option>
                    })
                }
            </select>

            <Botao nome="Cadastrar Jogo" onClick={() => setExibeFormCadastro(true)} className="mb-5"/>

            <ul className="flex flex-col gap-5">
                {
                    jogos?.length === 0 ? (
                        <span>Esta Season ainda não possui jogos cadastrados.</span>
                    )
                    : (
                        jogos?.map((jogo) => {
                            return <JogoComponente deletaJogo={deletaJogo} jogo={jogo} key={jogo.getId}/>
                        })  
                    )
                }
            </ul>

        </Layout>
    )
}