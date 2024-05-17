let numero1 = prompt("Ingrese el primer número:")
let numero2 = prompt("Ingrese el segundo número:")

primerNumero = numero1
segundoNumero = numero2

function multiplicar(n1,n2){
    let resultado = n1 * n2
    return `El resultado de multiplicar ${n1} y ${n2} es: ${resultado}`
}

let resultadoMultiplicacion = multiplicar(numero1,numero2)
console.log(resultadoMultiplicacion)

