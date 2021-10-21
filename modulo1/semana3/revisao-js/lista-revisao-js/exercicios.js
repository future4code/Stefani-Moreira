// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const arrayPares = array.filter((numeroPar) => {
    return numeroPar % 2 === 0;
  });
  return arrayPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const arrayPares = array.filter((numeroPar) => {
    return numeroPar % 2 === 0;
  });
  const paresElevadosA2 = arrayPares.map((numerosElevados) => {
    return Math.pow(numerosElevados, 2);
  });
  return paresElevadosA2;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return Math.max(...array);
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const maiorNumero = Math.max(num1, num2);
  const menorNumero = Math.min(num1, num2);

  const objeto = {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorNumero % menorNumero === 0,
    diferenca: maiorNumero - menorNumero,
  };

  return objeto;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let arrayPares = [];

  for (let i = 0; arrayPares.length < n; i++) {
    if (i % 2 === 0) {
      arrayPares.push(i);
    }
  }
  return arrayPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoA === ladoC) {
    return "Equilátero";
  } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
    return "Escaleno";
  } else {
    return "Isósceles";
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  retornaArrayOrdenado(array);

  let arraySegundoMaiorEMenor = [];
  arraySegundoMaiorEMenor.push(array[array.length - 2]);
  arraySegundoMaiorEMenor.push(array[1]);

  return arraySegundoMaiorEMenor;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const pessoaAnonima = {
    ...pessoa,
    nome: "ANÔNIMO",
  };
  return pessoaAnonima;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  const pessoasAutorizadas = pessoas.filter((pessoas) => {
    return pessoas.altura >= 1.5 && pessoas.idade > 14 && pessoas.idade < 60;
  });
  return pessoasAutorizadas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasNaoAutorizadas = pessoas.filter((pessoas) => {
    return pessoas.altura < 1.5 || pessoas.idade <= 14 || pessoas.idade >= 60;
  });
  return pessoasNaoAutorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  let soma = 0;

  for (let conta of contas) {
    for (let totalCompras of conta.compras) {
      soma += totalCompras;
    }
    conta.saldoTotal -= soma;
    conta.compras = [];
  }
  return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas.sort((a, b) => {
    if (a.nome < b.nome) {
      return -1;
    } else {
      return 1;
    }
  });
  return consultas;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  const ordenarDatas = consultas.sort((a, b) => {

    const dataA = a.dataDaConsulta.split("/");
    const novaDataA = new Date(dataA[2], dataA[1], dataA[0]);
    const dataB = b.dataDaConsulta.split("/");
    const novaDataB = new Date(dataB[2], dataB[1], dataB[0]);

    if (novaDataA < novaDataB) {
      return -1;
    } else {
      return 1;
    }
  });
  
  return ordenarDatas;
}
