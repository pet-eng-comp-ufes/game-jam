"use client"

import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import Titulo from "../components/Titulo"
import TituloSecao from "../components/TituloSecao"
import { Season } from "@/models/Season"

interface Grupo {
  nome: string
  participantes: string[]
  link: string
}

export default function Jogos() {

  const [grupos, setGrupos] = useState<Grupo[]>([])
  const [seasonAtual, setSeasonAtual] = useState<Season>()

  async function obtemSeasonAtual() {
    const res = await Season.obtemAtual()
    setSeasonAtual(res)
  }

  useEffect(() => {
    obtemSeasonAtual()
  }, [])

  useEffect(() => {
    setGrupos([
      {
        nome: "Equipe Gaga Games",
        participantes: ["Letícia Rodrigues", "Daniel Siqueira", "Arthur Maciel"],
        link: "https://petgamejam-jogo1.vercel.app/"
      },
      {
        nome: "Equipe Animal",
        participantes: ["Gustavo", "Tarcio", "Marcos"],
        link: "https://petgamejam-jogo3.vercel.app/"
      },
      {
        nome: "Equipe Capivarinhas",
        participantes: ["André Luiz Siqueira", "Arthur Manelli Riva Souza", "Daniela Souza Pimentel"],
        link: "https://petgamejam-jogo.vercel.app/"
      },
    ])
  }, [])

  return (
    <Layout season={seasonAtual}>

      <div className="mx-auto w-[80%] max-w-[1154px] pt-24 pb-10">

        <Titulo valor="JOGOS" />

        <p className="mt-10 mb-4 text-lg">
          Confira aqui os jogos dos nossos participantes:
        </p>

        {/* Caixas lado a lado — 3 colunas em telas grandes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-20">

          {grupos.map((grupo, index) => (
            <div
              key={index}
              className="flex min-h-[150px] flex-col justify-between rounded-xl border border-destaque-claro/20 bg-barra p-6 transition-transform duration-200 hover:scale-[1.03]"
            >

              {/* Nome da equipe — branco e sem ":" */}
              <h3 className="mb-3 text-xl font-bold text-destaque">
                {grupo.nome}
              </h3>

              {/* Botão */}
              <a
                href={grupo.link}
                target="_blank"
                className="block rounded-full bg-destaque py-2 text-center font-bold text-barra transition-opacity hover:opacity-90"
              >
                Jogar agora
              </a>
            </div>
          ))}

        </div>

      </div>
    </Layout>
  )
}
