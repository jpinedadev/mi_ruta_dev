//clases
class Car {
    //constructor
    constructor(name){
        this.brand = name;
    }
    //metodos 
    present(){
        return 'I have a ' + this.brand;
    }
}
//Herencia
class Model extends Car{
    constructor(name,mod){
        super(name);
        this.model = mod;
    }
    show(){
        return this.present()+ ',it is a '+ this.model;
    }
}

const mycar = new Model("Ford","Mustang");
//console.log(mycar.show());
//console.log(mycar)
//console.log(mycar.present());


//ejercicio 2
//clase
class Anime {
    constructor(nombre,creador,genero,capitulos,estudio){
        this.names = nombre;
        this.creator = creador;
        this.genere = genero;
        this.caps = capitulos;
        this.study = estudio;
    }
    print(){
        /* console.log('Nombre: '+this.names);
        console.log('Creador: '+this.creator);
        console.log('Genero: '+this.genere);
        console.log('Capitulos: '+this.caps);
        console.log('Estudio: '+this.study);*/
        return 'Fin de la instruccion'
    }
}


//const anime = new Anime("Slow Start","Yuko Tokumi","Recuentos de la vida",12,"CloverWorks");
const newAnime = new Anime ("Comic Girls", "Kaori Hanzawa", "Recuentos de la vida", 12, "Nexus");
//console.log(anime.print());
//console.log(newAnime.print());
//const anime = new Info("Slow Star",12);
//console.log(anime.show());
