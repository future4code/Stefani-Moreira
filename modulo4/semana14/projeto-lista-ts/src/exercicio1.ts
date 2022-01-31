const nome : string = process.argv[2];
const data : string = process.argv[3];

function exibeTexto (nome : string, data : string) : string {
    const novaData = data.split("/");
    const texto = `Olá me chamo ${nome}, nasci no dia ${novaData[0]} do mês de ${novaData[1]} do ano de ${novaData[2]}`

    return texto
}

console.log(exibeTexto(nome, data))