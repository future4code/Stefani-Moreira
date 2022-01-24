function exibeTipo(tipo : string | boolean | number) : string {
    return typeof(tipo)
}

console.log(exibeTipo(3))
console.log(exibeTipo("Lilás"))
console.log(exibeTipo(false))