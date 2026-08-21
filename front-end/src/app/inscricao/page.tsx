"use client"

import { useEffect, useState } from "react"
import { Season } from "@/models/Season"
import FormInscricao from "../components/FormInscricao"

export default function Inscricao() {

  const [seasonAtual, setSeasonAtual] = useState<Season | null>(null)

  useEffect(() => {

  async function fetchSeasonAtual() {

    const res = await Season.obtemAtual()
    setSeasonAtual(res ?? null)
  }
  fetchSeasonAtual()
}, [])

  if (!seasonAtual) {
    return <div className="mt-20 text-center">Carregando...</div>
  }

  return (

    <div
      style={{
        background: "url('/background-inscricao.webp') no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="flex lg:flex-row flex-col lg:h-screen justify-center items-center">

        <div className="lg:flex-1 w-full flex flex-col gap-12 justify-center items-center h-full mt-12 mb-12">

          <span className="font-titulo text-3xl text-destaque md:text-4xl lg:text-5xl">

            {seasonAtual.getInscricoesAbertas
              ? "Inscrições abertas!"
              : "Inscrições fechadas!"}
          </span>
          <img src="/logo.png" alt="Logo do PET Game Jam" className="md:h-52 h-36" />

        </div>

        <div className="flex w-full items-center justify-center lg:flex-1">

          {seasonAtual.getInscricoesAbertas ? (
            
            <FormInscricao numParticipantesPorEquipe={seasonAtual.getNumParticipantesPorEquipe} />
          ) : (
            <span className="text-2xl font-medium">
              As inscrições estão fechadas... Aguarde a próxima Season do Game Jam!
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
