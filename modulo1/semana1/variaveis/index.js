// EXERCÍCIO DE INTERPRETAÇÃO

/* Exercício 1
let a = 10
let b = 10

console.log(b) -> imprime 10

b = 5
console.log(a, b) -> imprime 10 5
*/

/* Exercício 2
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) -> imprime 10 10 10
*/

/* Exercício 3
let horasTrabalhoDia = prompt("Quantas horas você trabalha por dia?")
let valorTrabalhoDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${valorTrabalhoDia/horasTrabalhoDia} por hora`)
*/

// EXERCÍCIO DE ESCRITA

// Exercício 1

let nome;
let idade;

console.log(typeof nome, typeof idade);

// Foi impresso undefined para ambas variáveis devido a não ter valor algum atribuído.

nome = prompt("Qual é o seu nome?");
idade = prompt("Qual é a sua idade?");

console.log(typeof nome, typeof idade);

// As variáveis foram consideradas como do tipo String.

console.log("Olá", nome, "você tem", idade, "anos.");

// Exercício 2

let perguntaClima = "Hoje está fazendo sol?";
let climaDia = prompt(perguntaClima);

let perguntaAgua = "Bebeu água hoje?"
let beberAgua = prompt(perguntaAgua);

let perguntaAlmoco = "Já almoçou?"; 
let almocoDia = prompt(perguntaAlmoco);

console.log(perguntaClima, climaDia);
console.log(perguntaAgua, beberAgua);
console.log(perguntaAlmoco, almocoDia);

// Exercício 3

let a = 10
let b = 25

c = a;
a = b;
b = c;

console.log("O novo valor de a é", a);
console.log("O novo valor de b é", b);

// DESAFIO

let numero1 = prompt("Digite o primeiro número:");
let numero2 = prompt("Digite o segundo núemro:");

let soma = Number(numero1) + Number(numero2);
let multiplicacao = numero1 * numero2;

console.log("O primeiro número somado ao segundo número resulta em:", soma);
console.log("O primeiro número multiplicado pelo segundo número resulta em:", multiplicacao);
