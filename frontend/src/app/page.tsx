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

    <Layout season={seasonAtual} className="flex items-center justify-center">

      <div className="max-w-6xl w-[80%] mt-20 relative">

        <Titulo valor="O que é?"/>
        <p className="mt-6 mb-10">
        O PET Game Jam é uma competição de desenvolvimento de jogos de navegador criada pelo PET Engenharia de Computação da Ufes. Os participantes devem se organizar em equipes de até três pessoas e programar um jogo de navegador seguindo uma temática fornecida no início da competição.
        </p>

        <div className="flex justify-end">
          <Titulo valor="Como participar?"/>
        </div>
        <p className="mt-6 mb-10">
        Os interessados devem se organizar em equipes de no máximo 3 pessoas e realizar o cadastro no próprio site do evento, durante o período de inscrição. Caso queira ser um lobo solitário, tudo bem também, a inscrição é feita da mesma forma. Mas atenção! Cada equipe deve ter um nome, então escolham o mais criativo antes de se registrarem!
        </p>

        <Titulo valor="Premiação"/>
        <p className="mt-6 mb-10">
        Os jogos deverão ser submetidos até a data proposta nas regras. Eles serão avaliados pela nossa banca composta por especialistas e todos os participantes da melhor equipe ganharão o prêmio, que deverá ser retirado presencialmente na UFES Campus Goiabeiras. </p>
      </div>
    </Layout>
    
  );
}
