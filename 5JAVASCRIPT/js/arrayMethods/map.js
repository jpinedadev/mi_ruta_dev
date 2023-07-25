//practica map 

let arr = [3,4,5,6];
let myArray = arr.map((item)=> item*3);
console.log(myArray);

//tradicional 
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 3;
}
console.log(arr)


//mas ejemplos
const myArray2 = ['apple','banana','orange'];
const myList = myArray2.map((it)=> it);
console.log(myList)

let users = [
    {firstName: "Susan", lastName: "Steward"},
    {firstName: "Daniel", lastName: "Longbottom"},
    {firstName: "Jacob", lastName: "Black"}
];

let userFullnames = users.map((e)=> {return `${e.firstName} ${e.lastName}`})

console.log(userFullnames)
