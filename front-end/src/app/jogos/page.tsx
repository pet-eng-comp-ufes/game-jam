"use client"

import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import Titulo from "../components/Titulo"
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
    <Layout season={seasonAtual} className="flex items-center justify-center">

      <div className="max-w-5xl w-[80%] mt-20 text-white">

        <Titulo valor="Jogos" />

        <h2 className="text-lg mt-10 text-white mb-4">
          Confira aqui os jogos dos nossos participantes:
        </h2>

        {/* Caixas lado a lado — 3 colunas em telas grandes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-20">

          {grupos.map((grupo, index) => (
            <div
              key={index}
              className="bg-[#1b1b1d] p-6 rounded-xl border border-gray-800 shadow-lg hover:scale-[1.03] duration-200 min-h-[150px] flex flex-col justify-between"
            >

              {/* Nome da equipe — branco e sem ":" */}
              <h3 className="text-xl font-bold text-white mb-3">
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
