## Exercício de fixação JavaScript

Sistema que calcula a média ponderada das  atividades propostas a alunos de uma determinada escola, e apresenta o conceito de aprovação com base nessa média.

- Caso A: média maior ou igual a 9;
- Caso B: média menor que 9 e maior ou igual a 7,5;
- Caso C: média menor que 7,5 e maior ou igual a 6;
- Caso D: média menor que 6.


```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  const prova1 = p1 * 2;
  const prova2 = p2 * 3;
  const notaTotal = (ex + prova1 + prova2) / 6;
  
  let conceitoNota;
  
  if(notaTotal >= 9) {
    conceitoNota = "A";
  } else if(notaTotal < 9 && notaTotal >= 7.5) {
    conceitoNota = "B";
  } else if(notaTotal < 7.5 && notaTotal >= 6) {
    conceitoNota = "C";
  } else {
    conceitoNota = "D";
  }
  
  return conceitoNota;
}
