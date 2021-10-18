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

let informarUsuario;

// Variavel que analisa as condições iniciais do jogo. Caso corresponda ao declarado, o jogo deve ser reiniado
const condicaoReiniciarJogo = (cartaJogador1[0] === "A" && cartaJogador1[1] === "A") || (cartaJogador2[0] === "A" && cartaJogador2[1] === "A");

if (condicaoReiniciarJogo === true) {
  console.log(imprimirPontuacao(cartaJogador1));
  console.log(imprimirPontuacao(cartaJogador2));
  alert("O jogo será reiniciado. Pressione F5 se deseja jogar novamente");
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
  const condicaoUsuarioPerder = (somarValoresCartas(cartaJogador1) < 21 && 
  somarValoresCartas(cartaJogador2) > somarValoresCartas(cartaJogador1)) || 
  somarValoresCartas(cartaJogador2) === 21  || somarValoresCartas(cartaJogador1) >= 22;

  const condicaoComputadorPerder = (somarValoresCartas(cartaJogador2) < 21 && 
  somarValoresCartas(cartaJogador1) > somarValoresCartas(cartaJogador2)) || 
  somarValoresCartas(cartaJogador1) === 21  || somarValoresCartas(cartaJogador2) >= 22;

  if (condicaoUsuarioPerder) {
    jogadorVencedor = "O computador ganhou!";
  } else if (condicaoComputadorPerder) {
    jogadorVencedor = "O usuário ganhou!";
  } else {
    jogadorVencedor = "Empate!";
  }

  return jogadorVencedor;
}

//Função que mapeia quais cartas presentes no array
function informarCartas() {
  let textoJogador1 = cartaJogador1.map((usuario) => {
    return usuario.texto;
  });
  let textoJogador2 = cartaJogador2.map((computador) => {
    return computador.texto;
  });
  informarUsuario = confirm(`Suas cartas são ${textoJogador1.join(" ")}. A carta revelada do computador é ${textoJogador2.join(" ")}.`);

  return informarUsuario;
}

// Função que oferece ao jogador a opção de comprar mais cartas
function posicaoJogo() {
  informarUsuario = confirm(`Suas cartas são ${cartaJogador1[0].texto}, ${cartaJogador1[1].texto}. A carta revelada do computador é ${cartaJogador2[0].texto}.
  Deseja Comprar mais uma carta?`);

  if (informarUsuario === true && somarValoresCartas(cartaJogador1) < 21) {
    cartaJogador1.push(comprarCarta());
    informarCartas();
    if (informarUsuario === true && somarValoresCartas(cartaJogador1) < 21) {
      cartaJogador1.push(comprarCarta());
      informarCartas();
    }
  } else if (informarUsuario === false && somarValoresCartas(cartaJogador1) < 21) {
    cartaJogador2.push(comprarCarta());
    informarCartas();
    if (informarUsuario === false && somarValoresCartas(cartaJogador2) < 21) {
      cartaJogador2.push(comprarCarta());
      informarCartas();
    }
  }
}
/******************************************* EXECUÇÃO DO JOGO *******************************************/
//O  jogo inicia dando as boas vindas ao jogador e perguntando se deseja jogar, caso confirme, é impresso quais cartas foram sorteadas e a soma dos valores e pergunta se o usuário deseja comprar mais cartas. Caso o usuário não deseje jogar, é impresso que o jogo acabou.

alert("Boas vindas ao jogo de Blackjack!");

const iniciarJogo = confirm(
  "Deseja iniciar a jogada?  - A sua pontuação será informada no console do navegador"
);

if (iniciarJogo === true) {
  posicaoJogo();
  console.log(`Pontuação usuário: ${somarValoresCartas(cartaJogador1)}`);
  console.log(`Pontuação computador: ${somarValoresCartas(cartaJogador2)}`);
  console.log(infoFimJogo());
} else {
  console.log("O jogo acabou.");
}
