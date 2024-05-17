let mensajeNombre = "Ingrese su nombre"
let resultadoNombre = prompt(mensajeNombre)
let nombre = resultadoNombre 
console.log(nombre)


let mensajeEdad = "Ingrese su edad"
let resultadoEdad = prompt(mensajeEdad)
let edad = resultadoEdad
console.log(edad)


let mensajeDeporte = "¿Te gustan los deportes?"
let resultadoDeporte = confirm(mensajeDeporte)
let fanDeportes =  resultadoDeporte
console.log(fanDeportes)


let mensajeGracias = `Muchas gracias ${nombre} por responder nuestras preguntas`;
let resultadoGracias = alert(mensajeGracias)
console.log (resultadoGracias)





let deportistaProfesional = {
    nombreUsuario: nombre,
    edadUsuario: edad,
    fanDeportes :resultadoDeporte,
    
    profesional: function () {
    if (this.fanDeportes == true){
        console.log("Sí, soy fan de los deportes")
    } else {
        console.log("No, no soy fan de los deportes")
        }
}
}
deportistaProfesional.profesional()





