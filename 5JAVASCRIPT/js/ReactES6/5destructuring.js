//Destructuring
//Hace facil extraer solo lo que se necesita
//solo tomas los items que deseas usar

const vehicles = ['Mustang', 'f-150', 'expedition'];
//Antes
const car = vehicles[0];
console.log(car)

//Despues
const [cars,truck,suv] = vehicles;
console.log(truck)

//si solo queremos car y suv 
const [carss,,suvs] = vehicles;
console.log(suvs)

//Es muy util cuando una funcion retorna un arreglo
function calculate(a,b){
    const add = a+b;
    const substract = a-b;
    const multiply = a*b;
    const divide =  a/b;

    return [add,substract,multiply,divide];
}

const [add,substract,multiply,divide]=calculate(4,7);
console.log(add)

//Destructurando objetos

const vehicleOne = {
    brand:'Ford',
    model:'Mustang',
    type:'car',
    year:2021,
    color:'red'
}

myVehicle(vehicleOne)
//Antes
function myVehicle(vehicle){
    const message = 'My '+vehicle.type+ ' is a ' +vehicle.color + ' '+vehicle.brand+' '+vehicle.model+'.';
    console.log(message)
}

myVehicles(vehicleOne)
//Despues 
function myVehicles({type,color,brand,model}){
    const message = 'My '+type+' is a '+color+' '+brand+' '+model+'.';
    console.log(message)
}

//podemos destructurar profundamente objetos por referencia 

const vehiclesOnes = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicless(vehiclesOnes)

function myVehicless({ model, registration: { state } }) {
    const message = 'My ' + model + ' is registered in ' + state + '.';
    console.log(message)
}
