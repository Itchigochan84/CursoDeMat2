const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  // pergunta1
  {
      enunciado: "Você fez a isenção e inscrição para o ENEM, o que você pretende fazer agora?",
      alternativas: [
  {
          texto: "Vou estudar bem o que aprendeu na escola e realizar as tarefas",
          afirmacao: 
          [
            "Você começou a tirar notas maravilhosas nas disciplinas e ganhou certificado",
            "Você começou a sentir que está entendendo as aulas na escola",
          ],
  },
  {
          texto: "Além dos estudos para as provas, vou estudar nos sites e nas plataformas, ou seja, treinando as questões que já caiu no ENEM",
          afirmacao: 
          [
            "No começo, sentiu a dificuldade de entender a questão do estilo ENEM, mas de pouco em pouco começou a conseguir melhor",
            "A questão do estilo ENEM foi um assustador, mas continuou estudando porque terá o ENEM no final do ano",
          ],
  },
      ],
  },
  // pergunta2
  {
      enunciado: "Você aprendeu que a redação do estilo ENEM é dissertativo-argumentativo, como você estudará a redação?",
      alternativas: [
  {
          texto: "Vou estudar bem a estrutura da redação e como escrever para tirar notas boas",
          afirmacao: 
          [
            "Decorou totalmente como faz uma redação dissertativo-argumentativo e a estrutura",
            "Estudou como tem que escrever a redação e ficou contente que vai tirar noas boas na redação no ENEM",
          ],
  },
  {
          texto: "Além de estudar a estrutura, vou treinar a escrever a redação",
          afirmacao: 
          [
            "Treinou bastante como escreve, o que tem que escrever e a sua estrutura de redação",
            "Conseguiu decorar os repertórios, como obras para citar na redação e aprendeu a escrever a proposta de intervenção bem estruturada",
          ],
  },
      ],
  },
  // pergunta3
  {
      enunciado: "Chegou a semana da prova, e os conteúdos são bem difíceis e para tirar uma nota exelente, precisará de tempo para estudar, e agora?",
      alternativas: [
  {
          texto: "Vou continuar estudando para o ENEM, porque o ENEM é mais importante e se tiver o mínimo de nota para passar de ano está ótimo",
          afirmacao: 
          [
            "Você não teve nota vermelha, mas após as provas, percebe que esses conteúdos caem no ENEM",
            "Depois que acabou todas as provas, percebeu que podia ter estudado na semana da prova, porque terá que estudar o conteúdo de mesma maneira",
          ],
  },
  {
          texto: "Vou estudar bem e já dominar esses conteúdos para a prova, já que a nota da escola também é importante e já esuda para o ENEM",
          afirmacao: 
          [
            "Conseguiu tirar notas boas em todas as matérias, e também já mais um conhecimento para o ENEM",
            "Após gabaritar todas as provas, você percebeu que tem possibilidades de entrada ao ensino superior com as notas da escola",
          ],
  },
      ],
  },
  // pergunta4
  {
      enunciado: "Após o início da prova do ENEM, você pensou em resolver de qual jeito?",
      alternativas: [
  {
          texto: "Vou começar a resolver em ordem, para não ficar muito confusa depois",
          afirmacao: 
          [
            "No começo tava indo bem, mas ficou parado em uma questão difíceis e não deu tempo de resolver todas as questões",
            "Não deu tempo de resolver todas as questões e teve que chutar as últimas questões",
          ],
  },
  {
          texto: "Vou olhar todas as questões e começar a resolver dos fáceis, e deixar as questões difíceis para depois",
          afirmacao: 
          [
            "Deu tempo de resolver as questões que conseguiu entender, porém as questões que não entendeu foi chutando",
            "Conseguiu resolver todas as questões e deu para revisar algmas questões!",
          ],
  },
      ],
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
  if(atual>= perguntas.length){
    mostraResultado();
    return;
  },
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContext = perguntaAtual.enunciado;
  caixaAlternativas.textContext = "";
  mostraAlternativas();
},

function mostraAlternativas(){
  for (const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContext = alternativa.texto;
    botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
  },
},

function respostaSelecionada(opcaoSelecionada){
  const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
},

function mostraResultado(){
  caixaPerguntas.textContext = "O resultado do ENEM...";
  textoResultado.textContext = historiaFinal;
  caixaAlternativas.textContext = "";
},

function aleatorio(lista){
  const posicao = Math.floor(Math.random()*lista.length);
  return lista[posicao];
}

mostraPergunta();
