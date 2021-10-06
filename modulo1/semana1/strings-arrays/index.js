// EXERCÍCIO DE INTERPRETAÇÃO

/* Exercício 1
let array
console.log('a. ', array) -> imprime undefined por não ter valor atribuído ao array

array = null
console.log('b. ', array) -> imprime null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) -> imprime 11

let i = 0
console.log('d. ', array[i]) -> imprime 3, por ser o valor declarado na posição 0

array[i+1] = 19
console.log('e. ', array) -> imprime a substituição do valor na posição 1, ou seja 4 passará a ser 19.

const valor = array[i+6]
console.log('f. ', valor) -> imprime 9, por ser o valor declarado na posição 6.
*/

/* Exercício 2
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) -> imprime
SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

// EXERCÍCIO DE ESCRITA

// Exercício 1

const nomeUsuario = prompt("Informe o seu nome:");
const emailUsuario = prompt("Informe o seu e-mail:");

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`);

// Exercício 2

let comidasFavoritas = ["Lasanha", "Churrasco", "Empada de frango", "Coxinha de carne", "Brócolis refogado"];

//letra a
console.log(comidasFavoritas);

//letra b
console.log(`Essas são as minhas comidas preferidas: ${comidasFavoritas[0]};
${comidasFavoritas[1]};
${comidasFavoritas[2]};
${comidasFavoritas[3]};
${comidasFavoritas[4]}.`);

//letra c
comidasFavoritas[1] = prompt("Informe sua comida favorita");
console.log(comidasFavoritas)

// Exercício 3

//letra a
let listaDeTarefas = [];

//letra b
listaDeTarefas.push(prompt(`Informe 3 tarefas a serem realizadas hoje: 
1ª tarefa -`), 
prompt(`2ª tarefa -`), 
prompt(`3ª tarefa -`));

//letra c
console.log(listaDeTarefas);

//letra d
const tarefasFeitas = prompt("Informe de 1 - 3 a tarefa já realizada:") - 1;

//letra e
listaDeTarefas.splice(tarefasFeitas, 1);

//letra f
console.log(listaDeTarefas);

// DESAFIO

// Desafio 1
const frase = prompt("Digite um frase:");
const arrayFrase = frase.split(" ");

console.log(arrayFrase);

// Desafio 2
const arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
const acharIndice = arrayFrutas.indexOf("Abacaxi");

console.log(`Índice: ${acharIndice};
Tamanho do array: ${arrayFrutas[acharIndice].length}.`);
