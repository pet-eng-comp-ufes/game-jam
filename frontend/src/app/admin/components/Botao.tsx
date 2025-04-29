interface BotaoProps {

    nome: string
    onClick: () => void
    className?: string
}

export default function Botao(props: BotaoProps) {

    return (

        <button onClick={props.onClick} 
        className={`w-max text-white font-bold bg-blue-950 p-3 
        rounded-md hover:bg-blue-900 duration-300
        ${props.className}
        `}>
            {props.nome}
        </button>
    )
}