interface TituloProps {

    valor: string
    className?: string
}

export default function Titulo(props: TituloProps) {

    return (

        <h2 className={`font-titulo text-3xl leading-tight text-destaque md:text-[53px] md:leading-[71px] ${props.className ?? ""}`}>
            {props.valor}
        </h2>
    )
}
