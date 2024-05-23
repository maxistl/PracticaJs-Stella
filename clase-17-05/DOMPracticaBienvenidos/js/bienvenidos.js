alert("Bienvenidos a mi sitio.")
let avanzar = confirm ("¿Está seguro de que quiere avanzar?")
if (avanzar == false) {
    document.querySelector(".saludo").innerText = "Lamentamos que no quieras continuar tu visita"
} else {
    document.querySelector(".saludo").innerHTML = "Qué alegría que quieras continuar tu visita" 
}

let nombre = prompt("Ingrese tu nombre")
document.querySelector("h1").innerHTML = `Bienvenido ${nombre}`

let edad = prompt ("Ingrese su edad")

if (edad < 17) {
let general = document.querySelector(".container-general")
general.style.display = "none"
let newGeneral = document.querySelector("#accesoDenegado")
newGeneral.style.display = "block";
} else {
let programacion = confirm("¿Te gusta la programación?")
}

let imagen = document.querySelector(".background-img")
if (programacion == false) {
    imagen.style.backgroundImage = "url('./img/gatito.jpeg')"
} else {
    imagen.style.backgroundImage = "url('./img/programmer.jpeg')"
};
let imagen2 = document.querySelector("img.avatar")
let route = prompt("Ruta de imagen")
imgagen.src = route

let pelicula = {
    nombre: prompt("nombre de pelicula favorita"),
    director: prompt("nombre del director"),
    duracion: prompt("Duracion"),
    actor: prompt("actor")
}
document.querySelector("#nombre").innerText = pelicula.nombre
document.querySelector("#director").innerText = pelicula.director
document.querySelector("#duracion").innerText = pelicula.duracion
document.querySelector("#actor").innerText = pelicula.actor
let unblock = document.querySelector("div#pelicula")
unblock.style.display = "block"







