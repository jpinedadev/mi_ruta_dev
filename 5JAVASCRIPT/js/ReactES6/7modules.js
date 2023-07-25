console.log('modules')

//permiten poder seccionar tu codigo en archivos separados 
//esto hace que sea mas facil mantener el codigo base 
// los modulos ES son import y export 


//export permite exporta una funcion o variable de cualquier archivo 

//archivo person.js 
//en la misma linea 
export const name = "Jesse"
export const age = 40; 


//al final 
const name2 = "Jesse"
const age2 = 40; 

export {name2,age2}

//por defecto 
//archivo message.js 

const message = () => {
    const name = "Jesse";
    const age = 40;
    return name + 'is '+ age + ' years old.';
};

export default message; 



//import permite importar modulos dentro de archivos de dos formas basadas en si son exportaciones nombradas o por defecto  

//importacion desde exportacion nombrada  
import {name,age} from "./person.js";

//importacion desde exportacion por defecto 
import message from "./message.js";







