// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = document.querySelector("#titulo");
    titulo.addEventListener("mouseover", function(){
    let nombre = prompt("¿Cual es su nombre?");

    let saludo = document.querySelector("#saludo")

    if (nombre === null || nombre === "") {
        // Utilizamos el or en el condicional para poder cubrir ambos casos de falta de nombre.
        saludo.textContent = "BIENVENID@";
    } else {
        // Si se ingresó un nombre, mostrar un mensaje personalizado 
        saludo.textContent = "BIENVENID@ " + nombre;
        saludo.style.textTransform = "uppercase";
    }
    console.log("El nombre es " + nombre)
    })

    //let span = ;
 
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    

    /* Asignarle evento a la variable boton */
    //let boton = ;
 
 }) 

