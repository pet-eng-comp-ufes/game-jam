interface TituloProps {

    valor: string
    className?: string
}

export default function Titulo(props: TituloProps) {

    return (

        <span className={`md:text-4xl text-2xl font-extrabold text-[#B76CF9] ${props.className}`}>
            {props.valor}
        </span>
    )
}