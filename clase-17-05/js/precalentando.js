let mensaje = "¿Vas a salir de tu casa?"
let resultado = confirm (mensaje)

if (resultado == true) { //si pongo (resultado) solo, lo toma como true directamente
    alert("Chequeá el pronóstico del tiempo antes de salir.")
} else {
    alert("Que bueno que te quedes. Va a llover mucho hoy.")
}