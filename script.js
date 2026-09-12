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
          texto: "Vou preferir a estudar para o ENEM, porque se tiver o mínimo de nota para passar de ano está ótimo",
          afirmacao: 
          [
            "o que acontece diante da escolha",
            "",
          ],
  },
  {
          texto: "o que voce escolheu",
          afirmacao: 
          [
            "o que acontece diante da escolhaa",
            "",
          ],
  },
      ],
  },
  // pergunta4
  {
      enunciado: "perguntas",
      alternativas: [
  {
          texto: "o que voce escolhe",
          afirmacao: 
          [
            "o que acontece diante da escolha",
            "",
          ],
  },
  {
          texto: "o que voce escolheu",
          afirmacao: 
          [
            "o que acontece diante da escolhaa",
            "",
          ],
  },
      ],
  },
];
