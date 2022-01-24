enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

function catalogaFilme(nome: string, ano: number, genero: GENERO, pontuacao?: number) : object {
  const filme = {
    nome: nome,
    anoLancamento: ano,
    genero: genero,
    pontuacao: pontuacao,
  };

  return filme;
}

console.log(catalogaFilme("A era do gelo", 2002, GENERO.ACAO, 61));
