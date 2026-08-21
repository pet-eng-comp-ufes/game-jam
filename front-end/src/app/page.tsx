"use client"

import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import { Season } from "@/models/Season";
import Titulo from "./components/Titulo";

export default function Home() {

  const [seasonAtual, setSeasonAtual] = useState<Season>()

  async function obtemSeasonAtual() {

    const res = await Season.obtemAtual()

    setSeasonAtual(res)
  }

  useEffect(() => {

    obtemSeasonAtual()
  }, [])

  return (

    <Layout season={seasonAtual}>

      {/* 1154/1440 do mockup = 80% da largura, com o mesmo respiro no topo. */}
      <div className="mx-auto w-[80%] max-w-[1154px] pt-24 pb-10">

        <section>
          <Titulo valor="O que é Game Jam" />
          <p className="mt-6 text-lg leading-9">
            É uma competição de desenvolvimento de jogos de navegador criada pelo PET Engenharia
            de Computação da UFES. Os participantes devem se organizar em equipes de até três
            pessoas e programar um jogo de navegador seguindo uma temática fornecida no início
            da competição.
          </p>
        </section>

        {/* O segundo bloco entra recuado no mockup: x=214 contra x=143 dos
            outros dois, e um pouco mais estreito. */}
        <section className="mt-[150px] md:ml-[6%] md:max-w-[1083px]">
          <Titulo valor="Como participar" />
          <p className="mt-6 text-lg leading-9">
            Os interessados devem se organizar em equipes de no máximo 3 pessoas e realizar o
            cadastro no próprio site do evento, durante o período de inscrição. Caso queira ser
            um lobo solitário, tudo bem também, a inscrição é feita da mesma forma. Mas atenção!
            Cada equipe deve ter um nome, então escolham o mais criativo antes de se registrarem!
          </p>
        </section>

        <section className="mt-[150px]">
          <Titulo valor="Avaliação" />
          <p className="mt-6 text-lg leading-9">
            Os jogos deverão ser submetidos até a data proposta nas regras. Eles serão avaliados
            pela nossa banca composta por especialistas e todos os participantes da melhor equipe
            ganharão o prêmio, que deverá ser retirado presencialmente na UFES Campus Goiabeiras.
          </p>
        </section>
      </div>
    </Layout>
  );
}
