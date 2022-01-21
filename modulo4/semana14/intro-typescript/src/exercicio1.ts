function checaTriangulo(a: number, b: number, c: number):string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
}

console.log(checaTriangulo(5, 5, 5))
console.log(checaTriangulo(5, 3, 5))
console.log(checaTriangulo(1, 5, 5))