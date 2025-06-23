const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Pergunta 1: O que é Inteligência Artificial?",
    alternativas: [
      "Um sistema que simula a inteligência humana",
      "Um tipo de hardware para computadores",
    ],
  },
  {
    enunciado: "Pergunta 2: Qual dessas é uma aplicação de IA?",
    alternativas: [
      "Assistentes virtuais como a Siri e Alexa",
      "Uma impressora a jato de tinta",
    ],
  },
  {
    enunciado: "Pergunta 3: Qual destas afirmações é verdadeira sobre Machine Learning (aprendizado de máquina)?",
    alternativas: [
      "É um tipo de IA onde os sistemas aprendem com os dados e melhoram com o tempo",
      "É uma técnica de programação onde todas as regras precisam ser explicitamente programadas pelo desenvolvedor",
    ],
  },
];

let perguntaAtual = 0;

function mostrarPergunta() {
  // Limpa o conteúdo anterior
  caixaPerguntas.innerHTML = "";
  caixaAlternativas.innerHTML = "";
  caixaResultado.style.display = "none";

  // Exibe a pergunta atual
  const pergunta = perguntas[perguntaAtual];
  caixaPerguntas.innerHTML = `<h2>${pergunta.enunciado}</h2>`;

  // Cria os botões de alternativas
  pergunta.alternativas.forEach((alternativa, index) => {
    const botao = document.createElement("button");
    botao.textContent = alternativa;
    botao.addEventListener("click", () => escolherAlternativa(index));
    caixaAlternativas.appendChild(botao);
  });
}

function escolherAlternativa(indiceEscolhido) {
  perguntaAtual++;

  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  caixaPerguntas.innerHTML = "";
  caixaAlternativas.innerHTML = "";
  textoResultado.textContent = "Fim das perguntas sobre IA! Obrigado por participar.";
  caixaResultado.style.display = "block";
}

// Inicia o quiz
mostrarPergunta();
