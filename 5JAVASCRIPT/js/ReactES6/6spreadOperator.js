console.log('spread operator')
//el spread operator (....)permite copiar todo o parte de un arreglo u objeto dentro de otro arreglo u objeto 


const numbersOne = [1,2,3];
const numbersTwo = [4,5,6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined)

//el spread operator es frecuentemente usado en combinacion con la destructuracion 

const numbers = [1,2,3,4,5,6];
const [one,two,...rest] =numbers;
console.log(one+','+two+','+rest)

//podemos usarlo con objetos 

const myvehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}

const myUpdatedVehicle = {...myvehicle, ...updateMyVehicle}
console.log(myUpdatedVehicle)

//las propiedades que no se repiten, son combinadas, pero las que si se repiten como 'color' ha sido sobreescrita por el ultimo valor pasado
