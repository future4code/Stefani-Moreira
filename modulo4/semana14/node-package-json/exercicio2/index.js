const operacao = process.argv[2];
const numero1 = Number(process.argv[3]);
const numero2 = Number(process.argv[4]);

const calculo = (operacao, numero1, numero2) => {
  switch (operacao) {
    case "soma":
      console.log("\033[1;33m", numero1 + numero2);
      break;
    case "sub":
      console.log("\033[1;33m", numero1 - numero2);
      break;
    case "mult":
      console.log("\033[1;33m", numero1 * numero2);
      break;
    case "div":
      console.log("\033[1;33m", numero1 / numero2);
      break;
  }
};

if (operacao && numero1 && numero2) {
  console.log(calculo(operacao, numero1, numero2));
} else if (operacao && numero1) {
  console.log("\033[31mEsperava 3 parâmetros só recebi 2.");
} else {
  console.log("\033[31mEsperava 3 parâmetros recebi nenhum.");
}
