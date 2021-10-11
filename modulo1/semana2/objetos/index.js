/**************************************** EXERCÍCIO DE INTERPRETAÇÃO ****************************************/

/* Exercício 1

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) -> imprime Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) -> imprime Virginia Cavendish
console.log(filme.transmissoesHoje[2]) -> imprime canal: "Globo", horario: "14h"
*/

/* Exercício 2

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) -> imprime nome: "Juca" idade: 3 raca: "SRD"
console.log(gato) -> imprime nome: "Juba", idade: 3, raca "SRD"
console.log(tartaruga) -> imprime nome: "Jubo", idade: 3, raca "SRD"

b) Cópia das propriedades do objeto
*/

/* Exercício 3

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) -> imprime False;
console.log(minhaFuncao(pessoa, "altura")) -> imprime undefined por não ter chave e valor definido.

b) Ele verificou no objeto apenas a propriedade pedida, na primeia impressão havia a propriedade e o valor atribuído era false, na segunda impressão não havia propriedade definida.
*/

/**************************************** EXERCÍCIO DE ESCRITA ****************************************/

// Exercício 1

//letra a - objeto em que tem como propriedade nome e apelido (que deve ser um array com 3 valores atribuídos). A função recebe como parâmetro o objeto e retorna uma mensagem com os valores encontrados no objeto.

const pessoa = {
    nome: "Stefani",
    apelidos: ["Tef", "Steh", "Teté"]
};

function exibirInfosPessoa(pessoa) {
    return `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`
};

console.log(exibirInfosPessoa(pessoa));

//letra b - novo objeto em que atualiza os apelidos descritos anteriormente

const pessoaNovosApelidos = {
    ...pessoa,
    apelidos: ["Stef", "TefTef", "Tefani"]
};

console.log(exibirInfosPessoa(pessoaNovosApelidos));


// Exercício 2

//letra a - objeto que tem como propriedades nome, idade e profissão

const novaPessoa = {
    nome: "Stefani",
    idade: 22,
    profissão: "estudante"
};

const amigoPessoa = {
    nome: "Bianca",
    idade: 22,
    profissão: "estudante"
};

//letra b - função em que recebe os valores os objetos novaPessoa e amigoPessoa e retorna um array com as informações e o tamanho das chaves nome e profissão. Ao final imprime o retorno.

function infosPessoaEAmigo (novaPessoa, amigoPessoa) {
    return [novaPessoa.nome, novaPessoa.nome.length, novaPessoa.idade, novaPessoa.profissão,novaPessoa.profissão.length, 
            amigoPessoa.nome, amigoPessoa.nome.length, amigoPessoa.idade, amigoPessoa.profissão, amigoPessoa.profissão.length];
}

console.log(infosPessoaEAmigo(novaPessoa, amigoPessoa));

// Exercício 3

//letra a - variavel carrinho em que há um array vazio

let carrinho = [];

//letra b - 3 objetos que representam frutas e tem como propriedades o nome e a disponibilidade.

const goiaba = {
    nome: "Goiaba",
    disponibilidade: true
};

const acerola = {
    nome: "Acerola",
    disponibilidade: true
};

const morango = {
    nome: "Morango",
    disponibilidade: true
};

//letra c - função em que recebe as frutas como parâmetro e as colocam no array carrinho. Ao final imprime o array.

function feiraFruta(fruta1, fruta2, fruta3) {

    return carrinho.push(fruta1, fruta2, fruta3);
};

feiraFruta(goiaba, acerola, morango);

console.log(carrinho);

/********************************************** DESAFIO **********************************************/

//Desafio 1 - objeto que recebe como propriedades o nome, a idade e a profissão do usuário. Ao final imprime as informações recebidas e o tipo da variável infoUsuario.

const infoUsuario = {
    nome: prompt("Informe o seu nome:"),
    idade: Number(prompt("Informe a sua idade:")),
    profissão: prompt("Informe a sua profissão:")
};

console.log(infoUsuario);

console.log(typeof(infoUsuario));

//Desafio 2 - função que compara o ano de lançamento de dois filmes. Ao final imprime a comparação.

function compararLancamentoFilmes() {

    const filme1 = {
        nome: "Meninas Malvadas",
        anoLancamento: 2003
    };

    const filme2 = {
        nome: "Ela é o cara",
        anoLancamento: 2006
    };

    return `O primeiro filme foi lançado antes do segundo? ${filme1.anoLancamento < filme2.anoLancamento}
    O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.anoLancamento === filme2.anoLancamento}`
};

console.log(compararLancamentoFilmes());

//Desafio 3 - funcao em que retorna a disponibilidade de uma das frutas do exercício 3

function controleEstoque(goiaba) {
    return goiaba = {
        ...goiaba,
        disponibilidade: !goiaba.disponibilidade
    };
};

console.log(controleEstoque(goiaba));