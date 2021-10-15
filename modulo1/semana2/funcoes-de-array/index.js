/**************************************** EXERCÍCIO DE INTERPRETAÇÃO ****************************************/

/* Exercício 1

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})

a) Imprime - >   { nome: "Amanda Rangel", apelido: "Mandi" } 0
                 { nome: "Laís Petra", apelido: "Laura" } 1
                 { nome: "Letícia Chijo", apelido: "Chijo" } 2
*/

/* Exercício 2

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayB = usuarios.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayB)

a) Imprime -> ["Amanda Rangel",  "Laís Petra", "Letícia Chijo"]
*/

/* Exercício 3

const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" },
]

const novoArrayC = usuarios.filter((item, index, array) => {
   return item.apelido !== "Chijo"
})

console.log(novoArrayC)

a) Imprime ->   { nome: "Amanda Rangel", apelido: "Mandi" }
                { nome: "Laís Petra", apelido: "Laura" }
*/

/**************************************** EXERCÍCIO DE ESCRITA ****************************************/

// Exercício 1 -

const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

//letra a - função em que cria um array apenas com os nomes dos pets descritos no objeto acima.
const nomePets = (parametro) => {
  return parametro.nome;
};

const arrayNomesPets = pets.map(nomePets);

console.log(arrayNomesPets);

//letra b - função em que cria um array apenas com os pets da raça Salsicha descritos no objeto acima.
const arrayPetsSalsicha = pets.filter((parametro) => {
  return parametro.raca === "Salsicha";
});

console.log(arrayPetsSalsicha);

//letra c - programa em que filtra os pets da raça Poodle e coleta os seus nomes e então emite uma mensagem em que oferece desconto para tosa desses bicinhos.
const descontoPetsPoodle = (parametro) => {
  return parametro.raca === "Poodle";
};

const nomeDescontoPoodle = pets.filter(descontoPetsPoodle).map(nomePets);

const fraseDesconto = nomeDescontoPoodle.map((parametro) => {
  return `Você ganhou um cupom de desconto de 10% para tosar o/a ${parametro}!`;
});

console.log(fraseDesconto);

// Exercício 2

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

//letra a - função em que cria um array com os nomes dos produtos do objeto descrito acima.
const nomeProdutos = produtos.map((parametro) => {
  return parametro.nome;
});

console.log(nomeProdutos);

//letra b - programa em que mapeia os produtos e retorna um array em que esses produtos estão com 5% de desconto.
const desconto = produtos.preco * 0.05;

const descontoProdutos = produtos.map((parametro) => {
  const nomeProdutos = parametro.nome;
  const desconto = parametro.preco * 0.05;
  const precoProdutos = (parametro.preco - desconto).toFixed(2);

  return { nome: nomeProdutos, preco: precoProdutos };
});

console.log(descontoProdutos);

//letra c - função em que filtra os produtos da categoria Bebidas no objeto acima.
const produtosBebidas = produtos.filter((parametro) => {
  return parametro.categoria === "Bebidas";
});

console.log(produtosBebidas);

// letra d - função em que filtra os produtos com o nome Ypê do objeto acima.
const produtosYpe = produtos.filter((parametro) => {
  return parametro.nome.includes("Ypê");
});

console.log(produtosYpe);

//letra e - programa e que retorna os produtos com nome Ypê e seu preço.
const fraseCompraYpe = produtosYpe.map((parametro) => {
  const nomeProdutosYpe = parametro.nome;
  const precoProdutosYpe = parametro.preco.toFixed(2);
  return [`Compre ${nomeProdutosYpe} por ${precoProdutosYpe}`];
});

console.log(fraseCompraYpe);

/********************************************** DESAFIO **********************************************/

// Desafio 1

const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
];

//letra a - função em que mapeia o nome dos pokemons descritos no objeto acima e os imprimem em ordem alfabética.
const nomePokemons = pokemons.map((parametro) => {
  return parametro.nome;
});

console.log(nomePokemons.sort());

//letra b - função em que mapeia os tipos de pokemons do objeto acima e os imprimem sem repetir esses tipos.
const tiposPokemons = pokemons.map((parametro) => {
  return parametro.tipo;
});

const simplificarTiposPokemons = tiposPokemons.filter((pokemon, tipo, array) => {
  return array.indexOf(pokemon) === tipo;
});

console.log(simplificarTiposPokemons);
