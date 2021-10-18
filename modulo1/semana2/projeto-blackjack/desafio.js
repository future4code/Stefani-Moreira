/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let cartaJogador1 = [comprarCarta(), comprarCarta()];
let cartaJogador2 = [comprarCarta(), comprarCarta()];

// funções que mapeiam quais cartas presentes no array
let textoJogador1 = cartaJogador1.map((usuario) => {
  return usuario.texto;
});

let textoJogador2 = cartaJogador2.map((computador) => {
  return computador.texto;
});

// Variavel que analisa as condições iniciais do jogo. Caso corresponda ao declarado, o jogo deve ser reiniado
const condicaoReiniciarJogo = (cartaJogador1[0] === "A" && cartaJogador1[1] === "A") || (cartaJogador2[0] === "A" && cartaJogador2[1] === "A");

if (condicaoReiniciarJogo === true) {
  console.log(imprimirPontuacao(cartaJogador1));
  console.log(imprimirPontuacao(cartaJogador2));
  alert("O jogo será reiniciado. Clique em ok se deseja jogar novamente");
}

// Função que soma os valores das cartas qeu estão dentro do array
function somarValoresCartas(parametro) {
  let soma = 0;

  for (let i = 0; i < parametro.length; i++) {
    soma += parametro[i].valor;
  }
  return soma;
}

//Função que analisa a pontuação dos jogadores e define o vencedor.
function infoFimJogo() {
  const condicaoUsuarioPerder = somarValoresCartas(cartaJogador1) < 21 &&
    somarValoresCartas(cartaJogador2) > somarValoresCartas(cartaJogador1) ||
    somarValoresCartas(cartaJogador2) === 21;

  const condicaoComputadorPerder = somarValoresCartas(cartaJogador2) < 21 &&
    somarValoresCartas(cartaJogador1) > somarValoresCartas(cartaJogador2) ||
    somarValoresCartas(cartaJogador1) === 21;

  if (condicaoUsuarioPerder || somarValoresCartas(cartaJogador1) >= 22) {
    jogadorVencedor = "O computador ganhou!";
  } else if (condicaoComputadorPerder || somarValoresCartas(cartaJogador2) >= 22) {
    jogadorVencedor = "O usuário ganhou!";
  } else {
    jogadorVencedor = "Empate!";
  }

  return jogadorVencedor;
}

// Função que oferece ao jogador a opção de comprar mais cartas
function posicaoJogo() {
  let informarUsuario = confirm(`Suas cartas são ${textoJogador1.join(" ")}. A carta revelada do computador é ${cartaJogador2[0].texto}.
      Deseja Comprar mais uma carta?`);

  if (informarUsuario === true) {
    cartaJogador1.push(comprarCarta());
    textoJogador1 = cartaJogador1.map((usuario) => {
      return usuario.texto;
    });
    informarUsuario = confirm(`Suas cartas são ${textoJogador1.join(" ")}. A carta revelada do computador é ${cartaJogador2[0].texto}.`);
  } else {
    cartaJogador2.push(comprarCarta());
    alert(`Suas cartas são ${textoJogador1.join(" ")}. As cartas reveladas do computador são ${textoJogador2.join(" ")}.`);
  }
}

/******************************************* EXECUÇÃO DO JOGO *******************************************/

alert("Boas vindas ao jogo de Blackjack!");

const iniciarJogo = confirm("Deseja iniciar a jogada?  - A sua pontuação será informada no console do navegador");

if (iniciarJogo === true) {
  posicaoJogo();
  console.log(`Pontuação usuário: ${somarValoresCartas(cartaJogador1)}`);
  console.log(`Pontuação computador: ${somarValoresCartas(cartaJogador2)}`);
  console.log(infoFimJogo());
} else {
  console.log("O jogo acabou.");
}
