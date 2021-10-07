/********************************** EXERCÍCIO DE INTERPRETAÇÃO ***********************************/

/* Exercício 1
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) -> imprime 10
console.log(minhaFuncao(10)) -> imprime 50

b) Seria impresso a segunda chamada da função.
*/

/* Exercício 2
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a) A função tem como parâmetro um texto em que retorna esse texto escrito de forma minúscula e procura a presença da palavra cenoura. Sua utilididade é colocar textos escritos totalmente em letras minúsculas e procurar a palavra cenoura dentro deles.

b) True. True. True.
*/

/********************************** EXERCÍCIO DE ESCRITA ***********************************/

// Exercício 1

//letra a - função sem parâmetro que imprime uma mensagem sobre "você".

function exibirMinhasInfos() {

    return "Eu sou Stefani, tenho 22 anos, moro em Salvador e sou estudante.";

}

console.log(exibirMinhasInfos());

//letra b - função que recebe os parâmetros: nome, idade, cidade e profissão. Ao final imprime uma mensagem com esses parâmetros.

function exibirInfosUsuario(nome, idade, cidade, profissao) {

    const idadeUsuario = Number(idade);

    return `Eu sou ${nome}, tenho ${idadeUsuario} anos, moro em ${cidade} e sou ${profissao}.`;
}

console.log(exibirInfosUsuario("Stefani", 22, "Salvador", "estudante"));

// Exercício 2

// letra a - função que recebe dois numeros como parâmetros, faz a soma entre eles e retorna o resultado. Ao final imprime o resultado.

function somarDoisNumeros (numero1, numero2) {

    const somaEntreNumeros = Number(numero1) + Number(numero2);

    return somaEntreNumeros;
}

console.log(somarDoisNumeros(2, 5));

//letra b - função que recebe dois parâmetros, faz a comparaçâo de maior ou igual entre eles e retorna o boolean dessa comparação. Ao final imprime o retorno.

function compararNumeros (numero1, numero2) {

    const maiorOuIgual = numero1 >= numero2;

    return maiorOuIgual;
}

console.log(compararNumeros(4, 5));

//letra c - função que tem como parâmetro um número, verifica se é par e retorna o boolean dessa verificação. Ao final imprime o retorno.

function verificarNumeroPar (numero1) {

    const numeroPar = numero1 % 2 === 0;

    return numeroPar;
}

console.log(verificarNumeroPar(6));

//letra d - função que tem como parâmetro uma mensagem, em que retorna um array que verifica o tamanho dessa mensagem e apresenta sua versão totalmente em maiúsculo. Ao final imprime o retorno dos comandos.

function modificarMensagem (mensagem) {

    return [mensagem.length, mensagem.toUpperCase()];
}

console.log(modificarMensagem("Hoje está fazendo sol."))

// Exercício 3

// letra a - função operações apresenta duas variáveis que recebem seu valor através do prompt, tem 4 outras funções: somar, subtrair, multiplicar e dividir e retorna o valor dessas operações. Ao final imprime esses valores.


function operacoes() {

    const primeiroNumero = Number(prompt("Digite o primeiro número:"));
    const segundoNumero = Number(prompt("Digite o segundo número:"));

    function somarNumeros() {

        const soma = primeiroNumero + segundoNumero;

        return soma;
    }

    function subtrairNumeros() {

        const subtracao = primeiroNumero - segundoNumero;

        return subtracao;
    }

    function multiplicarNumeros() {

        const multiplicacao = primeiroNumero * segundoNumero;

        return multiplicacao;
    }

    function dividirNumeros() {

        const divisao = primeiroNumero / segundoNumero;

        return divisao;
    }

    return ` Números inseridos: ${primeiroNumero} e ${segundoNumero}:
    Soma: ${somarNumeros()}
    Subtração: ${subtrairNumeros()}
    Multiplicação: ${multiplicarNumeros()}
    Divisão: ${dividirNumeros()}`;
}

console.log(operacoes())

/********************************** DESAFIO ***********************************/


// Desafio 1

//letra a - arrow function que têm um parâmetro. Ao final é impresso o parâmetro.

const funcaoComUmParametro = (valor) => {

    return valor
}

console.log(funcaoComUmParametro(2));

// //letra b - arrow function com dois parâmetros, mas sem retorno. Há soma desses parâmetros que é exibida na impressão da arrow fuction a.

const funcaoSemRetorno = (primeiroValor, segundoValor) => {

    const soma = primeiroValor + segundoValor;
 
   console.log(funcaoComUmParametro(soma));
 }
 
 funcaoSemRetorno(7, 3);

// Desafio 2

//letra a - função que recebe dois parâmetros, tem como comando guardar em uma variável o quadrado desses parâmetros e então extrair a raíz quadrada dessa variável. Ao final é impresso o resultado. 

function calcularTeoremaPitagoras(cateto1, cateto2) {

    const hipotenusa = Math.pow(cateto1, 2) + Math.pow(cateto2, 2)

    return Math.sqrt(hipotenusa);

}

const resultado = calcularTeoremaPitagoras(6,6);

console.log(resultado);
