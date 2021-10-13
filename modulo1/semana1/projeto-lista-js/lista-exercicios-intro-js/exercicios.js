// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite a altura do retângulo:"));
  const largura = Number(prompt("Digite a largura do retângulo:"));

  console.log(altura * largura);
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
    const anoNascimento = Number(prompt("Informe o ano em que nasceu:"));
    const anoAtual = Number(prompt("Informe o ano em que está:"));

    console.log(anoNascimento - anoAtual);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomeUsuario = prompt("Informe o seu nome:");
  const idadeUsuario = Number(prompt("Informe a sua idade:"));
  const emailUsuario = prompt("Informe o seu e-mail:");

  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
    const corFavorita1 = prompt("Informe a sua cor favorita:");
    const corFavorita2 = prompt("Informe a sua segunda cor favorita:");
    const corFavorita3 = prompt("Informe a sua terceira cor favorita:");

    console.log([corFavorita1, corFavorita2, corFavorita3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array[array.length-1];
  const primeiroElemento = array[0];

  array[0] = ultimoElemento;
  array[array.length - 1] = primeiroElemento;

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const igualandoString1 = string1.toUpperCase(); 
  const igualandoString2 = string2.toUpperCase();
  const verificacao = igualandoString1 === igualandoString2;

  return verificacao;
}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Informe o ano em que está:"));
  const anoNascimento = Number(prompt("Informe o ano em que nasceu:"));
  const anoRG = Number(prompt("Informe o ano em que emitiu o RG:"));

  const idadeUsuario = anoAtual - anoNascimento;
  const anoEmissaoRG = anoAtual - anoRG;

  const requisitoRenovacao1 = (idadeUsuario <= 20) && (anoEmissaoRG >= 5);
  const requisitoRenovacao2 = (idadeUsuario > 20) && (idadeUsuario <= 50) && (anoEmissaoRG >= 10);
  const requisitoRenovacao3 = (idadeUsuario > 50) && (anoEmissaoRG >= 15);

  const condicao = requisitoRenovacao1 || requisitoRenovacao2 || requisitoRenovacao3

  console.log(condicao);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const acharAnoBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
  
  return acharAnoBissexto;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorDeIdade = prompt("Você tem mais de 18 anos?");
  const ensinoMedio = prompt("Você possui ensino médio completo?");
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?");

  const primeiroRequisito = maiorDeIdade == "sim";
  const segundoRequisito = ensinoMedio == "sim";
  const terceiroRequisito = disponibilidade == "sim";

  const checarRequisitos = primeiroRequisito && segundoRequisito && terceiroRequisito;

 console.log(checarRequisitos);
}