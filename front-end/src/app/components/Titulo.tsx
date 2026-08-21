// O PacFont e de 1998 e tem 85 glifos: A-Z, a-z, digitos e pontuacao basica.
// NENHUM acentuado — conferido no arquivo. Foi por isso que o mockup escreveu
// "O QUE E GAMEJAM" e "AVALIACAO": com acento, so os caracteres acentuados
// caem na fonte seguinte e aparecem solidos no meio de letras vazadas.
//
// Aqui o titulo recebe o texto CERTO, com acento, e essa continua sendo a
// unica fonte de verdade. O que muda e so a apresentacao: o que aparece na
// tela vai sem acento, como no desenho, e o texto acentuado vai no aria-label
// para quem usa leitor de tela ouvir portugues correto.
function semAcento(texto: string) {

    return texto
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")  // tira os diacriticos separados pelo NFD
        .replace(/ç/g, "c")
        .replace(/Ç/g, "C")
}

// A CAIXA do texto importa: no PacFont a maiuscula e um desenho vazado e a
// minuscula e solida, entao trocar o caso troca o estilo do titulo. Por isso
// nao existe text-transform aqui — quem chama decide, como no mockup.
interface TituloProps {

    valor: string
    className?: string
}

export default function Titulo(props: TituloProps) {

    const exibido = semAcento(props.valor)
    const mudou = exibido !== props.valor

    return (

        <h2
            aria-label={mudou ? props.valor : undefined}
            className={`font-titulo text-3xl leading-tight text-destaque md:text-[53px] md:leading-[71px] ${props.className ?? ""}`}
        >
            {exibido}
        </h2>
    )
}
