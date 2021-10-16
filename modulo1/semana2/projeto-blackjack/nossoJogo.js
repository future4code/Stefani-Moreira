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

//Cada jogador começa o jogo com duas cartas que estão dentro de um array.
let cartaJogador1 = [comprarCarta(), comprarCarta()];
let cartaJogador2 = [comprarCarta(), comprarCarta()];

//A função indica qual carta foi sorteda para o jogador e as exibe de acordo com sua posição no array.
function textoCartas(parametro) {
  return `${parametro[0].texto}, ${parametro[1].texto}`;
}

//A função soma os valores das cartas sorteadas.
function somarCartas(parametro) {
  return parametro[0].valor + parametro[1].valor;
}

// A função exibe as informações do jogo para cada jogador. As informações são quais cartas foram sorteadas e a soma dos valores dessas cartas.
function imprimirPontuacao(parametro) {
  let mensagemInfosJogadores;

  if (parametro === cartaJogador1) {
   mensagemInfosJogadores = `Usuário - cartas: ${textoCartas(parametro)} - pontuação: ${somarCartas(parametro)}`;
  } else if (parametro === cartaJogador2) {
   mensagemInfosJogadores = `Computador - cartas: ${textoCartas(parametro)} - pontuação: ${somarCartas(parametro)}`;
  }
  return mensagemInfosJogadores;
}

/******************************************* EXECUÇÃO DO JOGO *******************************************/

//O  jogo inicia dando as boas vindas ao jogador e perguntando se deseja jogar, caso confirme, é impresso quais cartas foram sorteadas e a soma dos valores. De acordo com a comparação entre as cartas dos jogadores é definido se alguém ganhou ou se houve empate. Caso o usuário não deseje jogar, é impresso que o jogo acabou.

console.log("Boas vindas ao jogo de Blackjack!");

const iniciarJogo = confirm("Deseja iniciar a jogada?");

if (iniciarJogo === true) {
  console.log(imprimirPontuacao(cartaJogador1));
  console.log(imprimirPontuacao(cartaJogador2));

  if (somarCartas(cartaJogador1) === somarCartas(cartaJogador2)) {
    console.log("Empate!");
  } else if (somarCartas(cartaJogador1) > somarCartas(cartaJogador2)) {
    console.log("O usuário ganhou!");
  } else if (somarCartas(cartaJogador1) < somarCartas(cartaJogador2)) {
    console.log("O computador ganhou!");
  }
} else {
  console.log("O jogo acabou.");
}