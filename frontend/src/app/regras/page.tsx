"use client"

import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Season } from "@/models/Season";
import Titulo from "../components/Titulo";

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

      <div className="max-w-6xl w-[80%] mt-20 relative text-white">

        {/* Título principal */}
        <Titulo valor="Regras" />

        {/* Tema */}
        <h2 className="text-2xl font-semibold" style={{ color: '#b76cf9', marginTop: '3rem', marginBottom: '1rem' }}>
          Tema
        </h2>
        <ol className="list-decimal ml-9 mb-6 space-y-2">
          <li>
            O tema desta edição do PET Game Jam é:{" "}
            <span style={{ color: "#85e21f" }}>PLATAFORMAS</span>
          </li>
        </ol>

        {/* Avisos */}
        <h2 className="text-2xl font-semibold" style={{ color: '#b76cf9', marginTop: '2.5rem', marginBottom: '1rem' }}>
          Avisos para as equipes de fora do Espírito Santo
        </h2>
        <ol className="list-decimal ml-9 mb-6 space-y-2">
          <li>Devido aos custos flutuantes de fretes e outras tarifas, as premiações físicas da competição são restritas apenas aos competidores residentes da Grande Vitória (região metropolitana da capital Vitória-ES).</li>
          <li>Equipes de fora irão competir em uma "categoria separada", na qual receberão o certificado de participação e, no caso das melhores colocadas, os devidos créditos nas redes sociais ao final da edição.</li>
          <li>Todas as equipes que efetivamente participaram receberão a certificação ao final.</li>
          <li>
            Quaisquer dúvidas podem ser esclarecidas no nosso instagram{' '}
            <a 
              href="https://www.instagram.com/petengcomp/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#85e21f', textDecoration: 'underline' }}
            >
              @petengcomp
            </a>.
          </li>
        </ol>

        {/* Gerais */}
        <h2 className="text-2xl font-semibold" style={{ color: '#b76cf9', marginTop: '2.5rem', marginBottom: '1rem' }}>
          Gerais
        </h2>
        <ol className="list-decimal ml-9 mb-6 space-y-2">
          <li>O PET Game Jam é um evento aberto para todos, independente da sua idade ou conhecimento em programação.</li>
          <li>Crie um jogo sozinho ou em grupo no máximo 3 pessoas.</li>
          <li>Crie um jogo durante o período em que o evento estiver acontecendo.</li>
          <li>O evento é totalmente gratuito.</li>
        </ol>

        {/* Datas */}
        <h2 className="text-2xl font-semibold" style={{ color: '#b76cf9', marginTop: '2.5rem', marginBottom: '1rem' }}>
          Datas
        </h2>
        <ol className="list-decimal ml-9 mb-6 space-y-2">
          <li>As inscrições serão do dia 07/10/2025 até 14/10/2025.</li>
          <li>A competição irá acontecer entre os dias 15/10/2025 e 05/11/2025. Esse será o tempo que seu time terá para aprender sobre o desenvolvimento de jogos, para enfim criar e enviar um jogo dentro do tema.</li>
          <li>O tema do jogo que vocês terão que seguir será divulgado aqui na página de regras e no instagram do PET, no dia 10/10/2025. Fiquem atentos!</li>
        </ol>

        {/* O jogo */}
        <h2 className="text-2xl font-semibold" style={{ color: '#b76cf9', marginTop: '2.5rem', marginBottom: '1rem' }} >
          O jogo
        </h2>

        <ol className="list-decimal ml-9 mb-6 space-y-2">

          <li>
            O jogo deve ser desenvolvido durante o período oficial da PET Game Jam.
          </li>

          <li>
            É permitido utilizar qualquer engine, framework ou linguagem de programação,
            incluindo Unity, Godot, Unreal Engine, GameMaker, Construct, bibliotecas em
            C, C++, Java, Python, JavaScript, entre outras.
          </li>

          <li>
            Ferramentas de prototipação e design, como Figma, Aseprite, Blender e
            similares, podem ser utilizadas livremente.
          </li>

          <li>
            É permitido utilizar assets de terceiros (arte, modelos 3D, músicas e efeitos
            sonoros), desde que a equipe possua os direitos de uso e realize os devidos
            créditos na página de submissão do jogo.
          </li>

          <li>
            A criação de assets próprios não é obrigatória, porém será considerada um
            diferencial durante a avaliação da apresentação audiovisual.
          </li>

          <li>
            O uso de Inteligência Artificial generativa para criação de código, arte,
            roteiro, áudio ou qualquer outro conteúdo do projeto é proibido.
          </li>

          <li>
            O jogo deve obrigatoriamente seguir o tema divulgado no início da competição.
            Jogos que não possuírem relação com o tema poderão ser desclassificados.
          </li>

          <li>
            Não serão aceitos jogos que contenham discurso de ódio, conteúdo
            discriminatório, violência extrema gratuita, material sexualmente explícito ou
            qualquer conteúdo ofensivo. Projetos que violem esta regra serão
            desclassificados.
          </li>

          <li>
            O foco da competição é o desenvolvimento de jogos digitais. Jogos físicos,
            jogos de tabuleiro e card games podem ser submetidos, porém sua avaliação
            poderá ser prejudicada devido à dificuldade de execução pela banca.
          </li>

        </ol>

        {/* Submissão */}

        <h2 className="text-2xl font-semibold" style={{ color: '#b76cf9', marginTop: '2.5rem', marginBottom: '1rem' }}>
          Submissão
        </h2>

        <ol className="list-decimal ml-9 mb-6 space-y-2">

          <li>
            Todos os jogos deverão ser enviados pela página oficial da PET Game Jam no
            itch.io até às 23h59 do último dia da competição.
          </li>

          <li>
            É altamente recomendado que o jogo possua uma versão jogável diretamente no
            navegador (Web/HTML5/WebGL), facilitando a avaliação da banca. Caso isso não
            seja possível, serão aceitos executáveis para Windows (.exe).
          </li>

          <li>
            A página do jogo deverá conter obrigatoriamente:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Nome do jogo;</li>
              <li>Nome da equipe;</li>
              <li>Instruções de como jogar;</li>
              <li>Créditos completos;</li>
              <li>Referências e licenças dos assets de terceiros utilizados.</li>
            </ul>
          </li>

          <li>
            Após o encerramento do prazo de submissão não serão aceitas alterações,
            exceto em casos excepcionais autorizados pela organização devido a problemas
            técnicos na plataforma.
          </li>

        </ol>

        {/* Propriedade */}

        <h2
          className="text-2xl font-semibold"
          style={{ color: '#b76cf9', marginTop: '2.5rem', marginBottom: '1rem' }}
        > 
          Propriedade
        </h2>
        
        <ol className="list-decimal ml-9 mb-6 space-y-2">
          
          <li>Seu jogo pertence a você. Afinal, foi você quem fez. O PET Game Jam, seus organizadores e afiliados não reclamam o direito ou propriedade do seu jogo.</li>
          <li>O PET Game Jam solicita o direito de usar seu jogo com propósito de publicidade do evento. Se você não deseja que seu jogo seja utilizado como publicidade, informe ao PET Engenharia de Computação da UFES.</li>
        
        </ol>

        {/* Avaliação */}
        <h2 
          className="text-2xl font-semibold" 
          style={{ color: '#b76cf9', marginTop: '2.5rem', marginBottom: '1rem' }}
        >
          Avaliação
        </h2>

        <ol className="list-decimal ml-9 mb-6 space-y-2">
          <li>O período de votação será de até 1 semana após o fim da competição.</li>

          <li>
            Os jogos serão avaliados de duas formas diferentes, sendo que a nota final totaliza 10 pontos,
            sendo 7 pontos dados pela média das notas dos juízes da banca avaliadora,
            e até 3 pontos serão obtidos por enquete no Instagram do PET{" "}
            <a 
              href="https://www.instagram.com/petengcomp/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#adf86c', textDecoration: 'underline' }}
            >
              @petengcomp
            </a>.
          </li>

          <li>
            A nota dos integrantes do grupo PET acontecerá da seguinte forma:
            <ol type="a" className="list-[lower-alpha] ml-6 mt-2 space-y-2">
              <li>
                Os jogos recebem de 0 a 10 pontos em cada categoria. 
                As categorias são:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Innovation</strong> – O inesperado. Os arranjos combinados de forma única, ou algo tão diferente que é notável.</li>
                  <li><strong>Fun</strong> – Quão você se divertiu jogando um jogo. Você olhou o relógio e descobriu que já haviam se passado 5 horas?</li>
                  <li><strong>Theme</strong> – Quão bem o jogo se adequa ao tema. Foi feito algo inesperado ou criativo com o tema?</li>
                  <li><strong>Graphics</strong> – Quão bom o jogo parece, ou quão efetivo é o estilo visual. Boa arte, excelente gráficos gerados ou geométricos, boa arte para programadores, etc.</li>
                  <li><strong>Audio</strong> – Quão bom ou efetivo é o som do jogo. Uma trilha sonora cativante, efeitos sonoros adequados, boa narração, etc.</li>
                  <li><strong>Humor</strong> – Quão engraçado é o jogo. Diálogos bem humorados, sons engraçados, ou é tão ruim que é bom?</li>
                  <li><strong>Mood</strong> – História, emoções ou a vibe que você sentiu ao jogar.</li>
                  <li><strong>Overall</strong> – Sua opinião geral sobre o jogo, em todos aspectos que são importantes para você.</li>
                </ul>
              </li>

              <li>
                Após a apuração de votos será feita a média de pontos por categoria de cada petiano, 
                e depois a média de pontos por petiano de cada jogo. 
                A pontuação máxima será de 7 pontos.
              </li>
            </ol>
          </li>

          <li>
            A nota com a enquete no Instagram acontecerá da seguinte forma:
            <ol type="a" className="list-[lower-alpha] ml-6 mt-2 space-y-2">
              <li>
                Ao longo da semana de avaliação, será feita uma enquete perguntando qual foi o melhor jogo do PET Game Jam,
                e a distribuição de pontos será assim:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>1º lugar mais votado</strong> → +3 pontos na pontuação final.</li>
                  <li><strong>2º lugar mais votado</strong> → +2,5 pontos na pontuação final.</li>
                  <li><strong>3º lugar mais votado</strong> → +2,0 pontos na pontuação final.</li>
                  <li><strong>4º lugar mais votado</strong> → +1,5 pontos na pontuação final.</li>
                  <li><strong>5º lugar mais votado</strong> → +1,0 ponto na pontuação final.</li>
                  <li><strong>6º lugar mais votado</strong> → +0,5 ponto na pontuação final.</li>
                </ul>
              </li>
            </ol>
          </li>
        </ol>

        {/* Premiação */}
        <h2 
          className="text-2xl font-semibold" 
          style={{ color: '#b76cf9', marginTop: '2.5rem', marginBottom: '1rem' }}
        >
          Premiação
        </h2>

        <ol className="list-decimal ml-9 mb-6 space-y-2">

          <li>
            Cada integrante das equipes melhores colocadas poderá escolher somente um item das seguintes opções, seguindo a ordem de classificação!

                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>3 Mouse Gamer RedDragon Cobra 12400 DPI</strong></li>
                  <li><strong>3 MousePad Gamer 70x35cm</strong></li>
                  <li><strong>3 Gift cards de R$20,00 na Steam</strong></li>
                </ul>
          </li>

          <li>
            A premiação será entregue de maneira física na sala do PET Engenharia de Computação que fica na UFES Campus Goiabeiras 
            (acesse{" "}

          <a 
            href="https://pet.inf.ufes.br/contato"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#adf86c', textDecoration: 'underline' }}
          >
            https://pet.inf.ufes.br/contato
          </a>{" "}
          caso não saiba onde é).
          </li>

          <li>
            Será marcado um dia com a equipe para a entrega do prêmio, mas caso não seja possível que algum participante vá até a UFES no dia marcado, fique tranquilo, nós iremos deixar o prêmio guardado e, quando possível, será marcado um novo dia para a entrega.
          </li>

          <li>
            Quando for buscar o prêmio é importante que os participantes do time levem um documento com foto que conste seu nome completo, e que esse nome seja igual ao que foi cadastrado no site do evento.
          </li>

        </ol>

        {/* Dúvidas */}
        <h2 
          className="text-2xl font-semibold" 
          style={{ color: '#b76cf9', marginTop: '2.5rem', marginBottom: '1rem' }}
        >
        Dúvidas
        </h2>

        <ol className="list-decimal ml-9 mb-6 space-y-2">

        <li>
          Qualquer dúvida, reclamação, sugestão ou elogio pode ser feito diretamente com o PET Engenharia de Computação 
          pelos nossos canais de comunicação:{" "}

        <a 
          href="https://www.instagram.com/petengcomp/" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: '#85e21f', textDecoration: 'underline' }}
        >
          https://www.instagram.com/petengcomp
        </a>.{" "}

        Estamos trabalhando bastante para fazer do evento o mais divertido possível!
        </li>
        </ol>

      </div>
    </Layout>
  );
}
