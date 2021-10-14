/**************************************** EXERCÍCIO DE INTERPRETAÇÃO ****************************************/

/* Exercício 12

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

a) O código pede ao usuário um número e confere se esse número dividido por 2 terá como resto 0, caso sim, apresentará a mensagem "Passou no teste", caso não, terá como mensagem "Não passou no teste".

b) Números pares.

c) Números ímpares
*/

/* Exercício 2

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

a) Pede ao usuário uma fruta, compara com as frutas descritas no código. Imprime uma mensagem com a fruta pedida e seu preço.

b) O preço da fruta Maçã é R$ 2.25

c)O preço da fruta Pêra é R$ 5
*/

/* Exercício 30

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) Pedindo ao usuário um número.

b)Caso 10: Esse número passou no teste. Caso -10: não seria impresso algo.

c)Sim, o console não pode exibir a mensagem, pois ela foi definida dentro do if, portanto será acessada apenas dentro dela. Caso o console.log fosse passado para dentro do if, a mensagem seria exibida.
*/

/**************************************** EXERCÍCIO DE ESCRITA ****************************************/

// Exercício 1

//letra a e b

const idadeUsuario = Number(prompt("Informe a sua idade:"));

// //letra c - programa em que verifica a idade informada pelo usuário e imprime uma resposta caso a informação seja verdadeira.

if (idadeUsuario >= 18) {
    console.log("Você pode dirigir.");
} else {
    console.log("Você não pode dirigir.");
};

// Exercício 2 - programa em que pede ao usuário para informar o turno em que estuda, verifica a condição (utilizando if/else) e imprime uma mensagem correspondente.

const turnoEstudoUsuario = prompt("Informe o turno em que estuda M, V ou N").toUpperCase();

if (turnoEstudoUsuario === "M") {
    console.log("Bom Dia!");
} else if (turnoEstudoUsuario === "V") {
    console.log("Boa Tarde!")
} else if (turnoEstudoUsuario === "N") {
    console.log("Boa Noite!")
} else {
    console.log("Informação inválida!")
}

// // Exercício 3 - programa em que verifica a condição do turno informado pelo usuário (utilizando switch case) e imprime uma mensagem correspondente.

switch (turnoEstudoUsuario) {
    case "M": console.log("Bom Dia!"); break;
    case "V": console.log("Boa Tarde!"); break;
    case "N": console.log("Boa Noite!"); break;
    default:  console.log("Informação inválida!")
}

// // Exercício 4 - programa em que pergunta ao usuário o gênero do filme e o valor do ingresso. Caso corresponda ao exigido será impresso uma mensagem desejando bom filme, caso contrario pedirá ao usuário para escolher outro filme.

const generoFilme = prompt("Informe o gênero do filme:").toLowerCase();
const valorIngresso = Number(prompt("Informe o valor do ingresso para esse filme:"));

if(generoFilme === "fantasia" && valorIngresso < 15) {
    console.log("Bom filme!");
} else {
    console.log("Escolha outro filme :(")
}

// /********************************************** DESAFIO **********************************************/

// // Desafio 1 - programa em que verifica o gênero do filme, o valor do ingresso e o lanche que será pedido. Caso corresponda ao exigido será impresso uma mensagem desejando bom filme e que aproveite o lanche, caso contrario pedirá ao usuário para escolher outro filme.

const lancheCinema = prompt("Informe o lanche que deseja comprar:")

if(generoFilme === "fantasia" && valorIngresso < 15) {
    console.log(`Bom filme!
    Aproveite o/a ${lancheCinema}.`);
} else {
    console.log("Escolha outro filme :(")
}

// // // Desafio 2 - programa em que pede ao usuário seu nome, tipo de jogo, etapa do jogo, categoria e quantidade de ingresso. Ao final é impresso essas informações e o valor a ser pago.

const nomeCompleto = prompt("Informe o seu nome completo");
const tipoJogo = prompt("Informe o tipo de jogo (IN - internacional ou DO - doméstico):").toUpperCase();
const etapaJogo = prompt("Informe a etapa do jogo (SF - semi-final, DT - terceiro lugar, FI - final)").toUpperCase();
const categoriaJogo = Number(prompt("Informe a categoria (1, 2, 3 ou 4):"));
const quantidadeIngresso = Number(prompt("Informe a quantidade de ingressos"));

let valorIngresso, valorTotalIngresso, etapaJogoEscolhida, tipoJogoEscolhido, numeroIngressosComprados, moedaCompra;

if(tipoJogo === "IN" || tipoJogo === "DO") {
    if(etapaJogo === "SF") {
        etapaJogoEscolhida = "Semi-final";
        if(categoriaJogo === 1) {
            valorIngresso = 1320;
        } else if (categoriaJogo === 2) {
            valorIngresso = 880;
        } else if (categoriaJogo === 3) {
            valorIngresso = 550;
        } else if (categoriaJogo === 4) {
            valorIngresso = 220;
        }
    } else if (etapaJogo === "DT") {
        etapaJogoEscolhida = "Terceiro Lugar";
        if(categoriaJogo === 1) {
            valorIngresso = 660;
        } else if (categoriaJogo === 2) {
            valorIngresso = 440;
        } else if (categoriaJogo === 3) {
            valorIngresso = 330;
        } else if (categoriaJogo === 4) {
            valorIngresso = 170;
        }
    } else if (etapaJogo === "FI") {
        etapaJogoEscolhida = "Final";
        if(categoriaJogo === 1) {
            valorIngresso = 1980;
        } else if (categoriaJogo === 2) {
            valorIngresso = 1320;
        } else if (categoriaJogo === 3) {
            valorIngresso = 880;
        } else if (categoriaJogo === 4) {
            valorIngresso = 330;
        }
    }
} 

if(tipoJogo === "IN") {
    tipoJogoEscolhido = "Internacional"
    valorIngresso = valorIngresso / 4.10;
    moedaCompra = `U$ ${valorIngresso}`
    valorTotalIngresso = `U$ ${quantidadeIngresso * valorIngresso}`
} else if (tipoJogo === "DO") {
    tipoJogoEscolhido = "Nacional";
    moedaCompra = `R$ ${valorIngresso}`
    valorTotalIngresso = `R$ ${quantidadeIngresso * valorIngresso}`
}

if(quantidadeIngresso <= 1) {
    numeroIngressosComprados = `${quantidadeIngresso} ingresso`
} else {
    numeroIngressosComprados = `${quantidadeIngresso} ingressos`
}


console.log(`---Dados da compra--- 
Nome do cliente:  ${nomeCompleto} 
Tipo do jogo:  ${tipoJogoEscolhido} 
Etapa do jogo:  ${etapaJogoEscolhida}
Categoria:  ${categoriaJogo} 
Quantidade de Ingressos:  ${numeroIngressosComprados} 
---Valores--- 
Valor do ingresso: ${moedaCompra}
Valor total:  ${valorTotalIngresso}
`)
