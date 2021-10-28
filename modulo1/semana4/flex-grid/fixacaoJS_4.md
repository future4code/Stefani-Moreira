## Exercícios de Fixação de Javascript

Crie uma função que recebe um array de números e um número escolhido. A função deve retornar quantas vezes este número aparece no array.

```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let numeroRepete = 0
  let mensagem;
  
  for (let i=0; i < arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] === numeroEscolhido){
      numeroRepete ++
    }
  } 
  
    if (numeroRepete > 0){
      mensagem = `O número ${numeroEscolhido} aparece ${numeroRepete}x`
    } else {
      mensagem = "Número não encontrado"
    }
    
    return  mensagem;
}