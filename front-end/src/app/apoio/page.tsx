"use client";

import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Patrocinador } from "@/models/Patrocinadores";
import { Season } from "@/models/Season";
import Titulo from "../components/Titulo";

export default function Patrocinadores() {

  const [seasonAtual, setSeasonAtual] = useState<Season>();
  const [patrocinadores, setPatrocinadores] = useState<Patrocinador[]>([]);

  async function obtemSeasonAtual() {

    const res = await Season.obtemAtual();
    setSeasonAtual(res);
  }

  async function obtemPatrocinadores() {

    const p = await Patrocinador.obtemTodosPatrocinadores();
    setPatrocinadores(p);
  }

  useEffect(() => {

    obtemSeasonAtual();
    obtemPatrocinadores();
  }, []);

  return (

    <Layout season={seasonAtual} className="flex flex-col items-center">

      <div className="mx-auto flex w-[80%] max-w-[1154px] flex-col items-center pt-24 pb-10">

        <Titulo valor="PATROCINADORES" />

        <div className="mt-15 mb-15 flex flex-wrap justify-center gap-8">

        {patrocinadores.length > 0 && (

          <div className="flex flex-wrap justify-center gap-10 mt-8">

            {patrocinadores.map((p) => (
              <img
                key={p.getId}
                src={p.getLogo}
                alt={p.getNome}
                className="h-30 w-auto object-contain"
              />
            ))}

          </div>
        )}

        {patrocinadores.length === 0 && (
          <p className="mt-6 text-tenue">Nenhum patrocinador cadastrado.</p>
        )}

        </div>

      </div>
    </Layout>
  );
}
