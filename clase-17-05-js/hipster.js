let nacionalidad = prompt("Ingrese su nacionalidad:")
let profesion = prompt("Ingrese su profesión:")
let kms = prompt("Ingrese cuántos kilómetros camina por día:")

function filosofoHipster(nacionalidad,profesion,kms){
    if (nacionalidad == "Argentina" && profesion == "filosofo" && kms == 2){
        return  "Soy un filósofo hipster"
    } else {
        return "Aún no soy filósofo hipster"
    }
}

let resultado = filosofoHipster(nacionalidad,profesion,kms)
console.log(resultado)