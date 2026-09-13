const caixaPrincipal = document.querySelector('.caixa-principal'); 
const caixaPerguntas = document.querySelector('.caixa-perguntas'); 
const caixaAlternativas = document.querySelector('.caixa-alternativas'); 
const caixaResultado = document.querySelector('.caixa-resultado'); 
const textoResultado = document.querySelector('.texto-resultado'); 
const botaoJogarNovamente = document.querySelector(".novamente-btn");

const perguntas = [ 
    // pergunta1 
    { 
        enunciado: "Você fez a isenção e inscrição para o ENEM, o que você pretende fazer agora?", 
        alternativas: [ 
            { 
                texto: "Vou estudar bem o que aprendeu na escola e realizar as tarefas", 
                afirmacao: [ 
                    "será uma nota mediana, pois, faltou um pouco de esforço para o estudo.", 
                    "será uma nota baixa, portanto, o que você estudou não foi o suficiente para a prova do ENEM." 
                ] 
            }, 
            { 
                texto: "Além dos estudos da escola, vou estudar nos sites e nas plataformas, ou seja, treinando as questões que já caiu no ENEM", 
                afirmacao: [ 
                    "será uma nota alta, porque você estudou bem durante o ano.", 
                    "será uma nota excelente! Porque você treinou bem as questões do estilo ENEM e estudou usando plataformas e pesquisando." 
                ] 
            } 
        ] 
    },
    // pergunta2
    {
        enunciado: "Você aprendeu que a redação do estilo ENEM é dissertativo-argumentativo, como você estudará a redação?",
        alternativas: [
            {
                texto: "Vou estudar como é a estrutura e decorar como faz a redação",
                afirmacao: [
                    "Todavia, você não zerou, mas não foi muito bem na redação, porém, faltou treinar a redação para entender como faz na prática.",
                    "E você teve dificuldade em escrever a redação, por causa que estudou somente a estrutura e não treinou."
                ]
            },
            {
                texto: "Além de estudar a estrutura, vou treinar a escrever a redação",
                afirmacao: [
                    "Além disso, você tirou nota 1000 na redação, pois, você treinou bem como escreve, uso de conectivos e repertórios.",
                    "Ademais, você tirou uma nota muito boa na redação, entendeu bem sobre o tema e escreveu direitinho!"
                ]
            }
        ]
    },
    // pergunta3
    {
        enunciado: "Hoje é um dia antes da prova do ENEM, vamos preparar como?",
        alternativas: [
            {
                texto: "Estudar a noite inteira sem dormir para ter mais conhecimento e ficar bem preparado para a prova",
                afirmacao: [
                    "No dia da prova, ficou com sono extremo durante a realização da prova e não conseguiu concentrar bem e não revisou direito a gabarito onde estava marcando.",
                    "O cansaço e o sono afetou na prova, e esqueceu muita coisa na hora da prova e acabou marcando a alternativa errada."
                ]
            },
            {
                texto: "Preparar a bolsa, colocar coisas necessárias para o dia da prova, dormir bem e almoçar mais cedo",
                afirmacao: [
                    "No dia da prova, conseguiu concentrar bem durante a realização da prova e revisou bem qual alternativa está marcando.",
                    "Como almoçou cedo, não ficou com sono e conseguiu concentrar até o final."
                ]
            }
        ]
    },
    // pergunta4
    {
        enunciado: "Após o início da prova do ENEM, você pensou em resolver de qual jeito?",
        alternativas: [
            {
                texto: "Vou começar a resolver em ordem, para não ficar muito confusa depois",
                afirmacao: [
                    "E no fim, teve algumas questões não resolvidas e apenas foi um chute por não der tempo de resolver, por isso caiu um pouco a nota em geral.",
                    "E a ansiedade e a preocupação de que demorou para resolver uma questão afetou no final, porque ficou com medo de não dar tempo e tentou resolver de qualquer maneira."
                ]
            },
            {
                texto: "Vou olhar todas as questões e começar a resolver as fáceis, e deixar as questões difíceis para depois",
                afirmacao: [
                    "Por fim, era bom ter resolvido as questões fáceis, porque o estilo da correção do ENEM avalia a coerência nas questões objetivas.",
                    "Conseguiu resolver todas as questões que sabia a resposta e deu para revisar várias questões, então a nota subiu."
                ]
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "O seu resultado do ENEM...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
  botaoJogarNovamente.addEventListener("click", jogarNovamente());
}

function aleatorio(lista) {
  const posicao = Math.floor(Math.random() * lista.length);
  return lista[posicao];
}

function jogaNovamente(){
        atual = 0;
        historiaFinal = "";
        mostraPergunta();
}

mostraPergunta();
