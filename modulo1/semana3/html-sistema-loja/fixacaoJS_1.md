## Exercício de fixação JavaScript

Sistema que analisa o salário total de um funcionário de uma revendedora de carros com base no seu salário fixo de R$ 2.000,00 e comissão de R$100,00 + 5% do valor do carro, por cada carro vendido.


```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    // Escreva seu código aqui

    const salarioFixo = 2000;
    const comissaoCarro = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05);
    const salarioFinal = salarioFixo + comissaoCarro;

    return salarioFinal;
}
