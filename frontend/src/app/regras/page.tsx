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
          <li>O tema desta edição do PET Game Jam ainda é um mistério!</li>
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
          <li>O PET Game Jam é um evento aberto para todos, independente da sua idade ou conhecimento em programação;</li>
          <li>Crie um jogo sozinho ou em grupo no máximo 3 pessoas;</li>
          <li>Crie um jogo durante o período em que o evento estiver acontecendo;</li>
          <li>O evento é totalmente gratuito.</li>
        </ol>

        {/* Datas */}
        <h2 className="text-2xl font-semibold" style={{ color: '#b76cf9', marginTop: '2.5rem', marginBottom: '1rem' }}>
          Datas
        </h2>
        <ol className="list-decimal ml-9 mb-6 space-y-2">
          <li>As inscrições serão do dia 07/10/2025 até 12/10/2025.</li>
          <li>A competição irá acontecer entre os dias 13/10/2025 e 03/11/2025. Esse será o tempo que seu time terá para aprender sobre o desenvolvimento de jogos, para enfim criar e enviar um jogo dentro do tema;</li>
          <li>O tema do jogo que vocês terão que seguir será divulgado aqui na página de regras, e também no instagram do PET, no dia 10/10/2025, fiquem atentos!</li>
        </ol>

        {/* O jogo */}
        <h2 className="text-2xl font-semibold" style={{ color: '#b76cf9', marginTop: '2.5rem', marginBottom: '1rem' }}>
          O jogo
        </h2>
        <ol className="list-decimal ml-9 mb-6 space-y-2">
          <li>Você pode criar seu jogo utilizando qualquer API baseada em JavaScript, mas recomendamos bastante que seja feito em Phaser3. Também é permitido utilizar qualquer código-fonte que você tenha.</li>
          <li>Nós iremos disponibilizar um jogo base dentro do tema para as equipes que não são familiarizadas com desenvolvimento de jogos. Os participantes poderão optar por melhorar este jogo como quiserem, ou começar um do zero por conta própria.</li>
          <li>Você pode utilizar assests de arte/música/áudio de terceiros, ou que você já tenha criado.</li>
          <li>É fortemente recomendado que seja utilizado apenas assets que você tenha direito de uso.</li>
          <li>Se seu jogo estiver parecido com um exemplo de jogo que vem em uma ferramenta de desenvolvimento, provavelmente, não terá uma boa pontuação. Certifique-se de personalizá-lo completamente e criar seu próprio jogo.</li>
          <li>Não será permitido conteúdo ofensivo a qualquer grupo social, incluindo, como exemplo: racismo, sexualidade explícita ou uso de drogas.</li>
          <li>O tema será postado no começo da competição, caso o jogo não tenha nenhuma relação com o tema, será desclassificado.</li>
          <li>Seu jogo deve estar com uma resolução de 800x600 pixels, e seu arquivo .html deve estar dessa forma:</li>
        </ol>

        <div className="ml-9">
          <img 
            src="/jogo.png" 
            alt="Imagem do jogo" 
            className="my-4 w-[90%] max-w-2xl"
          />
          <p className="mt-2 mb-2">
            <strong>Obs:</strong> É muito importante que a página do seu jogo não possua nenhuma borda, padding ou margem.
          </p>
        </div>

        <ol start={9} className="list-decimal ml-9 mb-6 space-y-2">
          <li>
            Submeter jogos que não são videogames:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>É permitido submeter card games e jogos de tabuleiro, porém jogá-los é mais complicado (em geral, é necessário mais de uma pessoa para jogá-los). Jogos mais difíceis de jogar costumam ter uma maior dificuldade para obterem boas classificações.</li>
              <li>O jogo ideal para o PET Game Jam é aquele que pode ser jogado em poucos minutos e sozinho.</li>
            </ul>
          </li>
        </ol>

        {/* Submissão */}
        <h2
          className="text-2xl font-semibold" 
          style={{ color: '#b76cf9', marginTop: '2.5rem', marginBottom: '1rem' }}
        > 
          Submissão
        </h2>
        
        <ol className="list-decimal ml-9 mb-6 space-y-2">
          
          <li>A submissão do seu jogo pode ser feita em qualquer dia e horário da semana de competição. NÃO será disponibilizado um horário extra a partir do fechamento do sistema, que será às 23:59 do dia final.</li>
          <li>A submissão deve ser feita enviando apenas um arquivo .zip com todas os arquivos do seu jogo, e ele deve estar todo em uma página .html. Exemplo do arquivo .zip:</li>
          
          </ol> <img src="/submissao.png" alt="Submissao" className="ml-9 my-4 w-[700px] max-w-full mt-2" />
          
          <ol start={3} className="list-decimal ml-9 mb-6 mt-2 space-y-2">
            
          <li>Durante a submissão será exigido uma thumbnail para seu jogo, seja criativo. Essa thumbnail deve ter uma resolução de aproximadamente 350x235 pixels.</li>
          <li>Após a submissão, não será permitida uma submissão de outro jogo ou editar o jogo que foi enviado pela sua equipe. Então fique atento para consertar todos os bugs antes do envio. O único caso de reenvio de jogo será quando por algum erro no sistema ocorra, ou o jogo não funcione na plataforma, nesses casos, tire prints e entre em contato com o PET Engenharia de Computação da UFES.</li>
          
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
          <li>O período de votação será de até 1 semana após o fim da competição;</li>

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
