//es un tipo de funcion, usamos la palabra class
//y las propiedades son aisgnadas dentro de un 
//metodo constructor
console.log('***Practice classes***')

class Car{
    constructor(name){
        this.brand=name;
    }

    present(){
        return 'I have a ' + this.brand;
    }
}

class Model extends Car{
    constructor(name,mod){
        super(name);
        this.model = mod;
    }

    show(){
        return this.present() + ' it is a ' + this.model
    }
}

//const myCar = new Car("Ford");
//myCar.present();
///console.log(myCar.present())
const myCar = new Model("Ford","Mustang");
console.log(myCar.show())

