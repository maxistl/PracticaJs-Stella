function rectangulo(base,altura){
    
    return base * altura
}
let arearectangulo = rectangulo(4,6)
console.log(arearectangulo)

function triangulo(base,altura){
    
    return (base * altura)/2
}
let areatriangulo = triangulo(4,6)
console.log(areatriangulo)



function largodelArray(bebidas){
    return bebidas.length

}
let arraybebidas = ["Agua", "Gaseosa", "Alcohol"]
let cantidadbebidas = largodelArray (arraybebidas)
console.log(cantidadbebidas)



function cantidadDeLetras(palabra) {
    return palabra.length
}
let palabra = "Rojo"
let cantidad = cantidadDeLetras(palabra)
console.log(cantidad)


function dolarHoy(pesos){
    let cambio = 0.001
    return pesos * cambio
}

let pesos = 2000;
let dolares = dolarHoy(pesos)
console.log (pesos, "pesos son ", dolares, "dolares")


function precioFinal(precio){
    let iva = precio * 0.21
    return precio + iva
}

let precio = 500
let precioConIva = precioFinal(precio)
console.log(precio, "con el iva serían: ",precioConIva)


function mitad(numero){
    return numero /2

}

let numero = 100
let mitadNumero = mitad(numero)
console.log (mitadNumero)


function siguiente(numero1) {
    return numero1 + 1;
  }
  let numero1 = 1
  let numero1Siguiente = siguiente(numero1)
  console.log(numero1Siguiente)

  
  function doble(numero2) {
    return 2 * numero2;
  }
  let numero2 = 4
  let numero2Doble = doble(numero2)
  console.log (numero2Doble)

  

  function siguienteDelDoble(numero3) {
     return siguiente(doble(numero3));
  }

  let numero3 = 3
  let numero3SiguienteDoble = siguienteDelDoble(numero3)
  console.log (numero3SiguienteDoble)


  function anterior(numero4) {
    return numero4 - 1;
  }
  let numero4 = 4
  let numero4anterior = anterior(numero4)
  console.log(numero4anterior)

  function triple(numero5) {
    return numero5 * 3 ;
  }
  let numero5 = 5
  let numero5triple = triple(numero5)
  console.log(numero5triple)

  function siguienteDelTriple(numero6) {
    return siguiente(triple(numero6));
  }
  let numero6 = 5
  let numero6tripledoble = siguienteDelTriple(numero6)
  console.log(numero6tripledoble)

  




  







