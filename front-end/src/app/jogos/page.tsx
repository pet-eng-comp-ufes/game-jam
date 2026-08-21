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
// Os de 2023 estavam so no GitLab, em repositorio privado e sem lugar onde
// jogar. Agora estao publicados na VM, em /arquivo/<jogo>/ no dominio da API.
// Testei os onze do grupo com navegador: dez rodam. A Lenda de Gabe ficou de
// fora — e Flutter web de build antiga, inicializa e nao desenha nada.
//
// SuperPETs esta hospedado junto mas NAO entra na lista: e o jogo do proprio
// PET, feito como exemplo de aprendizado, nao trabalho de participante.
//
// A edicao de 2023 e a season 2. Isso nao esta em lugar nenhum do codigo nem
// do banco, que so conhece a 3 e a 4 — veio de quem organiza o evento.
const temporadas: Temporada[] = [
  {
    numero: "2",
    jogos: [
      { nome: "Fire Scape", equipe: "Gabriel Braga Ladislau · Nilo Garcia Monteiro · Gabriel Gomes Lima", participantes: [], link: "https://apigamejam.pet.inf.ufes.br/arquivo/fire-scape/", capa: "/jogos/fire-scape.jpg" },
      { nome: "GRVTY", equipe: "Gamepiece Team", participantes: [], link: "https://apigamejam.pet.inf.ufes.br/arquivo/grvty/", capa: "/jogos/grvty.jpg" },
      { nome: "Asteroide", equipe: "", participantes: [], link: "https://apigamejam.pet.inf.ufes.br/arquivo/asteroide/", capa: "/jogos/asteroide.jpg" },
      { nome: "Dino", equipe: "", participantes: [], link: "https://apigamejam.pet.inf.ufes.br/arquivo/dino/", capa: "/jogos/dino.jpg" },
      { nome: "Flappy Bird", equipe: "", participantes: [], link: "https://apigamejam.pet.inf.ufes.br/arquivo/flappy-bird/", capa: "/jogos/flappy-bird.jpg" },
      { nome: "Glob Fights The King", equipe: "", participantes: [], link: "https://apigamejam.pet.inf.ufes.br/arquivo/glob-fights-the-king/", capa: "/jogos/glob-fights-the-king.jpg" },
      { nome: "Pong", equipe: "", participantes: [], link: "https://apigamejam.pet.inf.ufes.br/arquivo/pong/", capa: "/jogos/pong.jpg" },
      { nome: "Separados Pelo Tempo", equipe: "", participantes: [], link: "https://apigamejam.pet.inf.ufes.br/arquivo/separados-pelo-tempo/", capa: "/jogos/separados-pelo-tempo.jpg" },
      { nome: "Tarantella", equipe: "", participantes: [], link: "https://apigamejam.pet.inf.ufes.br/arquivo/tarantella/", capa: "/jogos/tarantella.jpg" },
    ],
  },
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
  // Todas comecam fechadas: quem chega escolhe qual quer ver, que e o que o
  // titulo da pagina pede ("SELECIONE UMA OPÇÃO:").
  const [aberta, setAberta] = useState<string | null>(null)

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
              <div key={t.numero} className="border-b border-destaque-claro">

                <h2>
                  <button
                    type="button"
                    onClick={() => setAberta(estaAberta ? null : t.numero)}
                    aria-expanded={estaAberta}
                    aria-controls={`season-${t.numero}`}
                    className="flex w-full items-center gap-8 py-1 text-left font-secao text-4xl uppercase leading-none text-destaque transition-opacity hover:opacity-80 md:text-5xl"
                  >
                    Season {t.numero}
                    <span aria-hidden className="-translate-y-[4.5px] shrink-0 leading-[0]">
                    <svg
                      viewBox="13.3 11.51 15.04 25.99"
                      className={`h-[26px] w-[15px] transition-transform duration-200 ${estaAberta ? "rotate-90" : ""}`}
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M27.7372 25.9513L16.1875 37.501L13.3005 34.6141L23.4068 24.5078L13.3005 14.4016L16.1875 11.5146L27.7372 23.0644C28.1199 23.4472 28.3349 23.9664 28.3349 24.5078C28.3349 25.0492 28.1199 25.5684 27.7372 25.9513Z"
                        fill="currentColor"
                      />
                    </svg>
                    </span>
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
                          {j.nome && j.equipe && <p className="mt-1 font-bold">{j.equipe}</p>}
                          {j.participantes.length > 0 && <p className="mt-4 text-base">{j.participantes.join(" · ")}</p>}

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
