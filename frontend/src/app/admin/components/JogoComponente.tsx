import { Jogo } from "@/models/Jogos"
import { IconeLixeira } from "./Icones"

interface JogoProps {

    jogo: Jogo
    deletaJogo: (jogo: Jogo) => void
}

export default function JogoComponente({ jogo, deletaJogo }: JogoProps) {

    const capaLink = `http://localhost:3333/files/${jogo?.getCapa}`

    return (

        <div className="flex border border-gray-800 p-4 md:w-max w-52 rounded-md gap-5 md:flex-row flex-col">

            <img src={capaLink} alt="" className="md:w-44 w-full object-cover"/>

            <div className="md:w-80 w-full flex flex-col">
                <span className="md:text-xl text-lg font-semibold mb-5">{jogo.getNome}</span>
                <div className="md:text-base text-sm w-full">
                    {jogo.getDescricao}
                </div>

                <div className="flex grow justify-end items-end">
                    <button onClick={() => deletaJogo(jogo)}
                    className="text-red-500 hover:bg-red-500 hover:text-white p-2 rounded-full">{IconeLixeira}</button>
                </div>
            </div>
        </div>
    )
}