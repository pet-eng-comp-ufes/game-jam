// Subtitulo das secoes internas, como na Regras e na Materiais do mockup:
// Jomhuria 48px em amarelo. E uma condensada, entao ocupa pouca largura mesmo
// em frase longa ("AVISOS PARA EQUIPES DE FORA DO ESPÍRITO SANTO:").
//
// Diferente do PacFont, esta TEM os acentuados — nao precisa do truque do
// aria-label que o Titulo usa, e por isso a caixa alta pode vir do CSS, sem
// mexer no texto que esta no codigo.
interface TituloSecaoProps {

    valor: string
    className?: string
}

export default function TituloSecao(props: TituloSecaoProps) {

    return (

        <h3 className={`font-secao text-3xl uppercase leading-none text-destaque md:text-5xl ${props.className ?? ""}`}>
            {props.valor}
        </h3>
    )
}
