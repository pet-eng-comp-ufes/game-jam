interface TituloProps {

    valor: string
}

export default function Titulo(props: TituloProps) {

    return (

        <span className="text-4xl font-extrabold mb-10">
            {props.valor}
        </span>
    )
}