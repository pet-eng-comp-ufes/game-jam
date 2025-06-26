"use client"

import { useEffect, useState } from "react";
import { Season } from "@/models/Season";

export default function Inscricao() {

    const [seasonAtual, setSeasonAtual] = useState<Season>()

    async function obtemSeasonAtual() {

        const res = await Season.obtemAtual()

        setSeasonAtual(res)
    }

    useEffect(() => {

        obtemSeasonAtual()
    }, [])

    function formulario() {

        const participantesForm = []

        let numParticipantesPorEquipe = seasonAtual?.getNumParticipantesPorEquipe

        if(numParticipantesPorEquipe) {

            for (let index = 1; index <= numParticipantesPorEquipe; index++) {
                const form = (
                    <>
                        <span className="mt-11 mb-3 text-xl font-bold">Participante {index}</span>
                        <input type="text"
                        placeholder="nome"
                        className="w-full h-11 bg-gray-200 text-black p-3 rounded-lg mb-3"/>
                        <input type="email"
                        placeholder="email"
                        className="w-full h-11 bg-gray-200 text-black p-3 rounded-lg mb-3"/>

                        <div className="flex">
                            <label htmlFor="" className="mr-2">Gênero: </label>
                            <select name="" id="" className="bg-gray-200 outline-0 text-black">
                                <option value="">Masculino</option>
                                <option value="">Feminino</option>
                                <option value="">Outros</option>
                            </select>
                        </div>
                    </> 
                )
                
                participantesForm.push(form)
            }
        }

        return (

            <form action="" className="flex flex-col w-[80%]">

                <label htmlFor=""  className="mb-3 text-xl font-bold">Qual o nome da sua equipe?</label>
                <input type="text" 
                className="w-full h-11 bg-gray-200 text-black p-3 rounded-lg"/>

                {
                    participantesForm
                }
            </form>
        )
    }

    return(

        <div style={{
            background: "url('/background-inscricao.webp') no-repeat",
            backgroundSize: "cover"
        }}>

            

            <div className="flex h-screen">

                <div className="flex-1 flex flex-col gap-12 justify-center items-center h-full">
                    <span className="text-white text-5xl font-extrabold">
                        {seasonAtual?.getInscricoesAbertas ? 'Inscrições abertas!' : 'Inscrições fechadas!'}
                    </span>
                    <img src='logo.png' alt="Logo do Game Jam" className="md:h-52 h-36"/>
                </div>
                <div className="flex-1 text-white flex justify-center items-center">

                    {
                        seasonAtual?.getInscricoesAbertas ? (
                            formulario()
                        ) : (
                            <span className="text-2xl font-medium">As inscrições estão fechadas...Aguarde a próxima Season do Game Jam!</span>
                        )
                    }

                </div>
            </div>
            
        </div>
    )
}