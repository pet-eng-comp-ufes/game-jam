"use client"

import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import Titulo from "../components/Titulo"
import { Season } from "@/models/Season"

interface Jogo {
  // Opcional de proposito: so o Capybara Airways tem nome proprio conhecido —
  // veio da tela inicial do jogo. Dos outros dois so se sabe a equipe, e
  // inventar titulo seria pior do que nao ter.
  nome?: string
  equipe: string
  participantes: string[]
  link: string
  capa: string
}

interface Temporada {
  numero: string
  jogos: Jogo[]
}

// Os jogos ficam aqui, e nao vem da API, porque a tabela `jogos` esta vazia:
// /seasonsComJogos devolve a season 3 e a season 4 sem nenhum jogo. Estes tres
// sao os que existem de fato — publicados na Vercel e ainda jogaveis, das
// equipes da season 3.
//
// As capas sao captura da tela inicial de cada jogo. Nao havia capa em lugar
// nenhum: nem no banco, nem nos repositorios.
//
// Existem mais dez jogos, da edicao de 2023, em gitlab.com/petengcomp/petgamejam.
// NAO entram aqui: os repositorios sao privados, nao tem Pages publicado e nao
// ha onde jogar. Entrariam como link quebrado.
const temporadas: Temporada[] = [
  {
    numero: "3",
    jogos: [
      {
        nome: "Capybara Airways",
        equipe: "Equipe Capivarinhas",
        participantes: ["André Luiz Siqueira", "Arthur Manelli Riva Souza", "Daniela Souza Pimentel"],
        link: "https://petgamejam-jogo.vercel.app/",
        capa: "/jogos/capivarinhas.jpg",
      },
      {
        equipe: "Equipe Gaga Games",
        participantes: ["Letícia Rodrigues", "Daniel Siqueira", "Arthur Maciel"],
        link: "https://petgamejam-jogo1.vercel.app/",
        capa: "/jogos/gaga-games.jpg",
      },
      {
        equipe: "Equipe Animal",
        participantes: ["Gustavo", "Tarcio", "Marcos"],
        link: "https://petgamejam-jogo3.vercel.app/",
        capa: "/jogos/animal.jpg",
      },
    ],
  },
]

export default function Jogos() {

  const [seasonAtual, setSeasonAtual] = useState<Season>()
  // Comeca com a temporada mais recente aberta: se so ha uma, deixar tudo
  // fechado faria a pagina parecer vazia.
  const [aberta, setAberta] = useState<string | null>(temporadas[0]?.numero ?? null)

  async function obtemSeasonAtual() {
    const res = await Season.obtemAtual()
    setSeasonAtual(res)
  }

  useEffect(() => {
    obtemSeasonAtual()
  }, [])

  return (

    <Layout season={seasonAtual}>

      <div className="mx-auto w-[80%] max-w-[1154px] pt-24 pb-10">

        <Titulo valor="SELECIONE UMA OPÇÃO:" />

        <div className="mt-12">
          {temporadas.map((t) => {

            const estaAberta = aberta === t.numero

            return (
              <div key={t.numero} className="border-b border-destaque-claro/30">

                <h2>
                  <button
                    type="button"
                    onClick={() => setAberta(estaAberta ? null : t.numero)}
                    aria-expanded={estaAberta}
                    aria-controls={`season-${t.numero}`}
                    className="flex w-full items-center gap-3 py-4 text-left font-secao text-3xl uppercase text-destaque transition-opacity hover:opacity-80 md:text-4xl"
                  >
                    Season {t.numero}
                    <span aria-hidden className={`text-2xl transition-transform duration-200 ${estaAberta ? "rotate-90" : ""}`}>›</span>
                  </button>
                </h2>

                {estaAberta && (
                  <ul id={`season-${t.numero}`} className="flex flex-col gap-12 pb-14 pt-4">
                    {t.jogos.map((j) => (
                      <li key={j.link} className="grid gap-8 md:grid-cols-[minmax(0,540px)_1fr] md:items-start">

                        <img
                          src={j.capa}
                          alt={`Tela inicial do jogo da ${j.equipe}`}
                          className="w-full rounded-xl border border-destaque-claro/20"
                          loading="lazy"
                        />

                        <div>
                          <h3 className="text-2xl font-bold text-destaque md:text-3xl">{j.nome ?? j.equipe}</h3>
                          {j.nome && <p className="mt-1 font-bold">{j.equipe}</p>}
                          <p className="mt-4 text-base">{j.participantes.join(" · ")}</p>

                          <a
                            href={j.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-block rounded-full bg-destaque px-8 py-3 font-bold text-barra transition-opacity hover:opacity-90"
                          >
                            Jogar agora
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
