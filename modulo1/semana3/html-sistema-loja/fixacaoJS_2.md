## Exercício de fixação JavaScript

Sistema que analisa o custo total de uma compra de maçãs. Caso a compra seja com a quantidade menor que 12, cada maçã custará R$ 1,30. Caso a compra seja com a quantidade igual ou maior que 12, cada maçã custará R$ 1,00.

```
function calculaPrecoTotal(quantidade) {
    // Escreva seu código aqui
    let custoTotal = 0;

    if(quantidade < 12) {
        custoTotal = (1.30 * quantidade);
    } else if(quantidade >= 12) {
        custoTotal = (1 * quantidade);
    }

    return custoTotal
}
