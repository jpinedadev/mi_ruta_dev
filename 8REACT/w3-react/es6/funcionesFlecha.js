console.log("*****FUNCIONES FLECHA*****")

//Forma tradicional
const hello = function(){
    console.log("Hola mundo!")
}

//Funcion flecha
const hello2 =()=>{return 'hello world'}
const hello3 =()=> 'hello world';

const hello4 =(val)=> 'hello '+val;
const hello5 = val => 'hello '+val;

let valor = hello4('julio');
let valor2 = hello5('julio');

//usando el this
//Ejemplo 1 

class Header {
    constructor(){
        this.color = "red";
    }
    //Funcion normal
        changeColor = function (){
            document.getElementById('demo').innerHTML += this;
        }
}

const myHeader = new Header();

class Header2 {
    constructor(){
        this.color = 'Red';
    }
    //funciones flecha
    changeColor2 =()=>{
        document.getElementById('demo').innerHTML +=this;
    }
}
const myHeader2 = new Header2();
