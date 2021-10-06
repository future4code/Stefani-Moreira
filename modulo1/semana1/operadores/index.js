// EXERCÍCIO DE INTERPRETAÇÃO

/* Exercício 1
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) -> imprime False

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) -> imprime False

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) -> imprime True

console.log("d. ", typeof resultado) -> imprime Boolean
*/

/* Exercício 2
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) -> imprime soma das strings declaradas em primeiroNumero e segundoNumero.
*/

/* Exercício 3
Solução: converter as strings em números com Number()

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)
*/

// EXERCÍCIO DE ESCRITA

// Exercício 1

const idadeUsuário = Number(prompt("Qual a sua idade?"));
const idadeMelhorAmigo = Number(prompt("Qual a idade do(a) melhor amigo(a)?"));

const maiorIdade = idadeUsuário > idadeMelhorAmigo;

const diferencaIdade = idadeUsuário - idadeMelhorAmigo;

console.log("Sua idade é maior do que a do(a) melhor amigo(a)?", maiorIdade);
console.log("Diferança de idade entre vocês é de", diferencaIdade, "anos.");

// Exercício 2

const numeroPar = Number(prompt("Informe um número par"));

const restoDivisao = numeroPar % 2;

console.log("O resto da divisão de", numeroPar, "por 2 é =", restoDivisao);

// Todo resto de número par dividido 2 será 0.

// Todo número ímpar dividido por 2 terá como resto o número 1.

// Exercício 3

const idadeAnos = Number(prompt("Informe a sua idade"));

const idadeMeses = idadeAnos * 12;
const idadeDias = idadeAnos * 365;
const idadeHoras = idadeAnos * 8760;

console.log("Idade em meses:", idadeMeses, "meses.");
console.log("Idade em dias:", idadeDias, "dias.");
console.log("Idade em horas:", idadeHoras, "horas.");

// Exercício 4

const primeiroNumero = Number(prompt("Informe um número:"));
const segundoNumero = Number(prompt("Informe outro número:"));

const maiorNumero = primeiroNumero > segundoNumero;
const igualdadeNumeros = primeiroNumero === segundoNumero;
const divisaoNumeros1e2 = primeiroNumero % segundoNumero === 0;
const divisaoNumeros2e1 = segundoNumero % primeiroNumero === 0;

console.log("O primeiro número é maior que segundo?", maiorNumero);
console.log("O primeiro número é igual ao segundo?", igualdadeNumeros);
console.log("O primeiro número é divisível pelo segundo?", divisaoNumeros1e2)
console.log("O segundo número é divisível pelo primeiro?", divisaoNumeros2e1)


// DESAFIO

// Desafio 1

let grausFahrenheit;
let grausCelsius;
let grausKelvin;

//letra a
grausFahrenheit = 77;
grausKelvin = (grausFahrenheit - 32)*(5/9) + 273.15;
console.log(grausFahrenheit + "°F em graus Kelvin são " + grausKelvin + "°K");

//letra b
grausCelsius = 80;
grausFahrenheit = (grausCelsius)*(9/5) + 32;
console.log(grausCelsius + "°C em graus Fahrenheit são " + grausFahrenheit + "°F");

//letra c
grausCelsius = 30;
grausFahrenheit = (grausCelsius)*(9/5) + 32;
grausKelvin = (grausFahrenheit - 32)*(5/9) + 273.15;
console.log(grausCelsius + "°C em graus Fahrenheit são " + grausFahrenheit + "°F e em Kelvin são " + grausKelvin + "°K");

//letra d
grausCelsius = Number(prompt("Informe a temperatura em graus Celsius que deseja converter para Fahrenheit"));
grausFahrenheit = (grausCelsius)*(9/5) + 32;
console.log(grausCelsius + "°C em graus Fahrenheit são " + grausFahrenheit + "°F");

// Desafio 2

let kwHora = 280;
let valorKwh = 0.05
let consumoKwh = kwHora * valorKwh;
let desconto = 15/100;
let consumoComDesconto = consumoKwh * desconto;

//letra a
console.log(consumoKwh);

//letra b
console.log(consumoKwh - consumoComDesconto);

// Desafio 3

//letra a
let libras = 20;
let librasKg = libras / 2.205;
console.log(libras + "lb equivalem a " + librasKg + "kg.");

//letra b
const oncas = 10.5;
const oncasKg = oncas / 35.274;
console.log(oncas + "oz equivalem a " + oncasKg + "kg.");

//letra c
const milhas = 100;
const milhasMetro = milhas * 1609;
console.log(milhas + "mi equivalem a " + milhasMetro + "m.");

//letra d
const pes = 50;
const pesMetro = pes / 3.281;
console.log(pes + "ft equivalem a " + pesMetro + "m.");

//letra e
const galao = 103.56;
const galaoLitro = galao * 3.785;
console.log(galao + "gal equivalem a " + galaoLitro + "l.");

//letra f
const xicara = 450;
const xicaraLitro = xicara / 4.167;
console.log(xicara + "xic equivalem a " + xicaraLitro + "l.");

//letra g
libras = Number(prompt("Informe a medida em libras:"));
librasParaKg = libras / 2.205;
console.log(libras + "lb equivalem a " + librasParaKg + "kg.");
