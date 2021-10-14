/**************************************** EXERCÍCIO DE INTERPRETAÇÃO ****************************************/

/* Exercício 1

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) -> imprime 10. O código está verficando os números menores que 5 e fazendo uma soma entre eles.
*/

/* Exercício 2

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

a) Será impresso os números dentro do array que forem maiores que 18.

b) Sim, poderia usar o indexOf() para pesquisar o índice de cada numero presente no array, e para isso seria necessária repetir código diversas vezes, então o indicado é por dentro de um loop, que pode ser o for of.
*/

/* Exercício 3

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

- Será impresso 4 linhas com a mesma quantidade de * que o número daquela linha. Exemplo: linha 1 - *; linha 2 - ** e assim vai.
*/

/**************************************** EXERCÍCIO DE ESCRITA ****************************************/

// Exercício 1 - programa em que pergunta ao usuario a quantidade de pets que tem e retorna uma indicação de adoção caso ele não tenha, ou pede o nome dos pets (dependendo da quantidade que ele tenha), ao final é impresso um array com o nome dos pets.

let numeroPet = Number(prompt("Quantos bichinhos de estimação você tem?"));
let nomePet = [];
let perguntaNomePet;

if(numeroPet === 0) {
    console.log("Que pena! Você pode adotar um pet");
} else {
    for (let i = 1; i <= numeroPet; i++) {
    perguntaNomePet= prompt(`Qual o nome do seu bichinho ${i}?`);
    nomePet.push(perguntaNomePet);
    }
    console.log(nomePet);
};

// Exercício 2

const arrayOriginal = [2, 13, 6, 9, 10, 11, 4, 15, 17, 8];

//letra a 
function imprimirValoresArray() {
  for (let i = 0; i < arrayOriginal.length; i++) {
    console.log(arrayOriginal[i]);
  };
};

imprimirValoresArray();

//letra b
function imprimirValoresDivididoPor10() {
  for(let i = 0; i < arrayOriginal.length; i++) {
    console.log(arrayOriginal[i] /= 10);
  };
};

imprimirValoresDivididoPor10();

//letra c
let arrayPares = [];

function imprimirValoresPares() {
  for(let numero of arrayOriginal) {
    if(numero % 2 === 0) {
      arrayPares.push(numero)
    }
  }
  console.log(arrayPares)
}

imprimirValoresPares()

//letra d
let arrayStrings = [];
let fraseArray;

function imprimirValoresEStrings() {
  for(let i = 0; i < arrayOriginal.length; i++) {
    fraseArray = `O elemento do índex ${i} é: ${arrayOriginal[i]}`
    arrayStrings.push(fraseArray)
  }
    console.log(arrayStrings)
}
  
imprimirValoresEStrings()

//letra e
let maiorElemento = 0;
let menorElemento = 99;
  
function acharMaiorEMenorlemento() {
  
  for(let numero of arrayOriginal) {
    if(numero > maiorElemento) {
      maiorElemento = numero;
    }
    if(numero < menorElemento) {
      menorElemento = numero;
    }
  }
  console.log(`O maior número é ${maiorElemento} e o menor é ${menorElemento}.`)
}

acharMaiorEMenorlemento()