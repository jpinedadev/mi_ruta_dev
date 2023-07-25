//Las funciones flechas permiten escribir funcion mas cortas

//tradicional
hello = function(){
    return "Hello world";
}

//Arrow function
hello = () => {
    return "Hello world";
}

//aun mas corto
hello = () => "Hello world";

//con parametros
hello = (val) => "Hello " + val;

//sin paratensis 
hello = val => "Hello" + val; 

//Usando el this en una funcion flecha 


//Funcion tradicional 
class Header {
    constructor() {
        this.color = "Red";
    }
    //Regular function: 
    changeColor = function(){
        document.getElementById("demo").innerHTML += this;
    }
}
const myHeader = new Header();
window.addEventListener("load", myHeader.changeColor);
document.getElementById("btn").addEventListener("click", myHeader.changeColor);

//Arrow functions 
class Header {
    constructor() {
        this.color = "Red";
    }
    //Regular function: 
    changeColor = () =>{
        document.getElementById("demo").innerHTML += this;
    }
}
const myHeader = new Header();
window.addEventListener("load", myHeader.changeColor);
document.getElementById("btn").addEventListener("click", myHeader.changeColor);
