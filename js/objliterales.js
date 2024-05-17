let misDatos =  {
    nombre: "Maximo",
    apellido: "Stella",
    edad: 19,
    dni: "46291866",
    comidasFavoritas: ["Milanesa", "Empanadas","Wok de verduras"],
    saludar: function () {
        return "Hola, mi nombre es " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años. Mi primer comida favorita es la " + this.comidasFavoritas[0] + ".";
    }
};

console.log(misDatos.saludar())


let auto = {
    marca: "Chevrolet",
    modelo: "Equinox",
    anio: 2023,
    color: "Negro",
    posicion: 0,
    avanzar: function(n) {
            this.posicion = this.posicion + n
    },
    retroceder: function(n) {
            this.posicion = this.posicion - n
    },
}

auto.avanzar(6)
auto.retroceder(4)

console.log("La posicion final:", auto.posicion)


let autoNuevo = {
    marca: "Chevrolet",
    modelo: "Onix",
    anio: 2019,
    color: "gris",
    posicion: 0,
    moverse: function(n) {
        this.posicion += n
    }
}

autoNuevo.moverse(-6)
autoNuevo.moverse(11)

console.log("La posicion final:", autoNuevo.posicion)


let ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(num1) {
            this.energia = this.energia - 10;
            return "Poder Elegido de", + this.nombre ,":", + this.poderes[num1], "Energía restante:", + this.energia,"";
    },
}

let Hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(num) {
        this.energia = this.energia - 10;
        return "Poder Elegido de", + this.nombre, ":", + this.poderes[num], "Energía restante:" ,+ this.energia,"";
    },
}
let num1 = 1
console.log(ironMan.getPoder(num1));


console.log(Hulk.getPoder(0));
console.log(Hulk.getPoder(2));
console.log(Hulk.getPoder(1));










