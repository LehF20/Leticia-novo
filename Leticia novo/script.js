// Seleção dos elementos HTML
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
    respostaCorreta: 0, // Indica a alternativa correta (0 = primeira, 1 = segunda)
  },
  {
    enunciado: "Pergunta 2: Qual dessas é uma aplicação de IA?",
    alternativas: [
      "Assistentes virtuais como a Siri e Alexa",
      "Uma impressora a jato de tinta",
    ],
    respostaCorreta: 0,
  },
  {
    enunciado: "Pergunta 3: Qual destas afirmações é verdadeira sobre Machine Learning (aprendizado de máquina)?",
    alternativas: [
      "É um tipo de IA onde os sistemas aprendem com os dados e melhoram com o tempo",
      "É uma técnica de programação onde todas as regras precisam ser explicitamente programadas pelo desenvolvedor",
    ],
    respostaCorreta: 0,
  },
];

let perguntaAtual = 0;
let acertos = 0; // Contador de acertos

// Função para exibir a pergunta atual
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

// Função que é chamada quando o usuário escolhe uma alternativa
function escolherAlternativa(indiceEscolhido) {
  const pergunta = perguntas[perguntaAtual];
  const respostaCorreta = pergunta.respostaCorreta;

  // Verifica se a resposta do usuário está correta
  if (indiceEscolhido === respostaCorreta) {
    acertos++;
    mostrarFeedback("Você acertou!", "success");
  } else {
    mostrarFeedback("Você errou! Tente novamente.", "error");
  }

  // Avança para a próxima pergunta
  perguntaAtual++;

  // Atraso de 1 segundo para mostrar o feedback e carregar a próxima pergunta
  setTimeout(() => {
    if (perguntaAtual < perguntas.length) {
      mostrarPergunta();
    } else {
      mostrarResultado();
    }
  }, 1000);
}

// Função para mostrar o feedback da resposta do usuário
function mostrarFeedback(mensagem, tipo) {
  const feedback = document.createElement("p");
  feedback.textContent = mensagem;
  feedback.classList.add(tipo); // Adiciona uma classe para estilizar o feedback (success ou error)
  caixaResultado.innerHTML = ""; // Limpa o feedback anterior
  caixaResultado.appendChild(feedback);
  caixaResultado.style.display = "block";
}

// Função para mostrar o resultado final
function mostrarResultado() {
  caixaPerguntas.innerHTML = "";
  caixaAlternativas.innerHTML = "";
  textoResultado.textContent = `Fim das perguntas sobre IA! Você acertou ${acertos} de ${perguntas.length} perguntas.`;
  caixaResultado.style.display = "block";
}

// Inicia o quiz
mostrarPergunta();
