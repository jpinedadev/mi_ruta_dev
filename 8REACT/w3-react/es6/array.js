//Metodos de arreglos

//el metodo .map() permite recorrer un arra item por item y retornar
//un nuevo array como resultado
//En React, map() puede ser usado para generar listas

console.log('***array*****')
//const myArray = ['apple','banana','orange'];
//const myList = myArray.map((item) => <p>{item}</p>)

//Forma tradicional 
const letters = new Array("a","b","c");
const letters2 = new Array(3); //array vacio de tamaño 3

//Mediante literales (notacion preferida)
const letters3 = ["a","b","c"];
const letters4 = [];
const letters5 = ["a",5,true];

//Acceso a elementos del array
letters.length;
letters[0];
//modificando un valor
letters[1]="z";
//metodos para añadir o quitar elementos
//push inserta al final del array
//pop quita el ultimo elemento
//unshift inserta al inicio del array
//shift elimina el inicio

const elements = ["a","b","c"];
elements.push("d")
elements.pop();
elements.unshift("z")
elements.shift()

//concatenar arrays
const firtsPart = [1,2,3]
const secondPart = [4,5,6]
const nuevo = firtsPart.concat(secondPart)

//separar y unir strings
const letters6 = ["a","b","c"];
const nletter = letters6.join("->");
const nletter2 = letters6.join(".");
const nletter3 = "Hola a todos".split();

//buscar elementos en un array
//includes() comprueba si el elemento indicado esta incluido en el Array
const numbers = [5,10,15,20,25];
numbers.includes(3); //false

//buscar la posicion indexOf()
const numbers2 =  [5,10,15,20,25,20,15,10,5];
numbers2.indexOf(5)

//buscar el final lastIndeOf()
numbers2.lastIndexOf(5)

//buscar un elemento de un array 

const names = [
    {name: "Maria",age:20},
    {name: "Bernardo",age:28},
    {name: "Pancracio",age:22},
    {name: "Andrea",age:19},
]
//busca el primer elemento con la edad indicada,
//sino devuelve -1

const findElement = (array,searchAge) => {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.age === searchAge) {
            return element;
        }
    }
    return -1;
}

findElement(names,19);


//Array functions
//son metodos que tiene cualquier variable que sea de tipo Array
//y que permite realizar una operacion con todos los elementos de
//dicho array para conseguir un objetivo concreto.

//bucle foreach

//con funciones por expresion
const letras = ["a","b","c","d"]
const f = function(element){
    //console.log(element)
};

letras.forEach(f)
//letras.forEach((element)=>console.log(element));

//Transformadores y filtros
//transformas map
//el metodo map e sun metodo muy potente y util para trabajar
//con arrays, puesto que su objetivo es devolver un nuevo array
//puesto que su objetivo es devolver un nuevo array donde cada uno de
//sus elementos sera lo que devuelva la funcion callback por cada
//uno de los elementos del array original.

const nombres2 = ["Ana","Pablo","Pedro","Pancracio","Heriberto"];
const nameSizes = nombres2.map((name)=> name.length);
//mas ejercicios de map 

let arr = [3,4,5,6];
let modifierArr = arr.map((element)=>element*3)

let users = [
    {firstName: "Susan", lastName: "Steward"},
    {firstName: "Daniel", lastName: "Longbottom"},
    {firstName: "Jacob", lastName: "Black"}
];

let userFullNames =  users.map((element)=> `${element.firstName} ${element.lastName}`)

//filter 
//nos permite filtrar los elementos de un array y devolver
//un nuevo array con solo los elementos que queramos.

const ages = [32,33,16,40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
    return age >=18;
}

//Busquedas
//fin y findIndex

const names2 = ["Ana","Pedro","Pablo","Pancracio","Heriberto"];
const find =names2.find((name)=>name.length ==5);
const finindex = names2.findIndex((name)=> name.length ==5);

//acumuladores 
//reduce sirve para recorrer un array y acumular sus valores 

const numeros2 = [95,5,25,10,25];
const result2 = numeros2.reduce((first,second)=>{
    //console.log(`F=${first} S=${second}`);
    return first + second;
})

//Desctructuracion de arrays 

const vehicles = ['mustang','f-150','expedition'];
const [car,truck,suv] = vehicles;

function calculate(a,b){
    const add = a+b;
    const substract = a-b;
    const multiply = a*b;
    const divide = a/b;

    return [add,substract,multiply,divide];
}

const [add,substract,multiply,divide] = calculate(4,7);


const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red'
}

myVehicle(vehicleOne);

function myVehicle({type,color,brand,model}) {
    const message = 'My' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.' ;
    console.log(message)
}

