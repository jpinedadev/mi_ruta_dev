function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    let dni = "32185620054"
    //console.log("Hola soy "+ nombre)

    this.getDni = function(){
        return dni;
    }

    this.saludar = function(){
        console.log("Hola, soy " + nombre + " tengo "+ edad + " años mi dni es "+ this.getDni());
    }
}

let objetoPersona = new Persona("Julio",23);
//console.log(objetoPersona.nombre)
//console.log(objetoPersona.getDni());
console.log(objetoPersona.saludar());
