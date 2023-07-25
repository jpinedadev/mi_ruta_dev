console.log('Hola dom')
/*El DOM o document object model es un conjunto de utilidades especificamente diseñadas para manipular documentos html, este tranforma el documento html en un arbol de nodos jerarquico, facilmente manipulable*/
//Nodos mas importantes: document,element,atrr,text

//OBTENIENDO ELEMENTOS
//getElementById
const page = document.getElementById("page");
console.log(page)
const page2 = document.getElementById("page2");
console.log(page2)

//getElementsByClassName
const items = document.getElementsByClassName("item");
console.log(items)
console.log(items[0])
console.log(items.length)

//getElementsByName(name),getElementsByTagName(tag)
const nickname = document.getElementsByName("nickname");
console.log(nickname)
const divs = document.getElementsByTagName("div");
console.log(divs)
console.log(divs.length)

//querySelector(id/class/)
//al igual que getElementById() solo devuelve el primer elemento
const page3 = document.querySelector("#page");
console.log(page3)
const item2 = document.querySelector(".item")
console.log(item2)
const info = document.querySelector(".info");
console.log(info)

//querySelectorAll()
//similar a getElementsByClassName() devuelve un array con todos los elementos que encuentre
const infos = document.querySelectorAll(".info");
console.log(infos)
const nickname2 = document.querySelectorAll('[name="nickname"]');
console.log(nickname2)
const divs2 = document.querySelectorAll("div");
console.log(divs2)

//CREANDO ELEMENTOS
//createElement()
//podemos crear un elemento HTML en memoria y modificar su contenido para posteriormente insertarlo
const nuevoDiv = document.createElement("div");

//REEMPLAZANDO EL CONTENIDO
//.textContent devuelve el contenido de texto de un elemento
const nuevoDiv2 = document.querySelector("div")
nuevoDiv2.textContent = "Hola a todos";

//.innerHTML nos permite hacer lo mismo, pero interpretando el código HTML indicado renderizando sus elementos:
const divInfo = document.querySelector(".info");
divInfo.innerHTML = "<strong>Importante</strong>";

//INSERTANDO ELEMENTOS
//appendChild() inserta el elemento como un hijo al final
const img = document.createElement("img");
img.src = "pfp.jpg";
img.alt = "pfp waifu";
img.style = "width:50px; height:50px;"
document.body.appendChild(img);

const items4 = document.querySelectorAll(".item")
items4[0].textContent = "item";
items4[1].textContent = "item 2";

//insertAdjacent es bastante mas versatil ya que permiten muchas mas posibilidades
//.insertAdjacentElement() donde insertamos un objeto
//.insertAdjacentHTML() donde insertamos código HTML
//.insertAdjacentText() donde no insertamos elementos sino solo texto

//ELIMINANDO ELEMENTOS

const nuevoDivDelete = document.createElement("div")
nuevoDivDelete.innerHTML = "<b>Hola mundo</b>"
nuevoDivDelete.className = "delete"
document.body.appendChild(nuevoDivDelete)
const deleteMe = document.querySelector(".delete")
deleteMe.remove()

//EJERCICIOS DE USO DEL DOM
//Ejercicio 1

const newElem = document.createElement('div')
newElem.id = 'nuevoElemento'
newElem.className = 'bloque'
newElem.style = 'background:red; width:100px; height:100px'
const body = document.querySelector("body")
body.appendChild(newElem)

//Ejercicio 2
const newItem = document.createElement('div')
newItem.textContent = 'nuevo item'
newItem.className = 'element'
document.body.appendChild(newItem)

//Ejercicio 3
const newItem2 = document.createElement('div')
newItem2.textContent = 'new Item 2'
newItem2.className = 'newItem2'
document.body.appendChild(newItem2)

//Ejercicio 4 crear:
//<div id="page" class="info data dark" data-number="5"></div>
const divi = document.createElement('div')
divi.id = 'page3'
divi.className = 'info data dark'
divi.textContent = 'hola divi'
document.body.appendChild(divi)


//La propiedad .className viene a ser la modalidad directa y rápida de utilizar el getter .getAttribute("class") y el setter .setAttribute("class", v)
const divClass = document.querySelector(".element");
// Obtener clases CSS
divClass.className;              // "element shine dark-theme"
divClass.getAttribute("class");  // "element shine dark-theme"
// Modificar clases CSS
divClass.className = "elemento brillo tema-oscuro";
divClass.setAttribute("class", "elemento brillo tema-oscuro");

//Ejercicio
const newItem2Class = document.querySelector('.newItem2')
console.log(newItem2Class.className); //visualiza la clase
newItem2Class.className = "nuevo" //reemplaza la clase

//ACCEDER A CLASES CSS
//el objeto classList. Se trata de un objeto especial que contiene una serie de ayudantes que permiten trabajar con las clases

const divList = document.querySelector("#page3");
console.log(divList.classList);
console.log(divList.classList.length);
console.log(Array.from(divList.classList));
console.log(divList.classList.values);
console.log(divList.classList.item(0));
console.log(divList.classList.item(1));
console.log(divList.classList.item(3));


//Añadir y eliminar clases CSS 
//Los métodos .classList.add() y .classList.remove() permiten indicar una o múltiples clases CSS a añadir o eliminar.
const divu = document.querySelector("#page3");
divu.classList.add("uno", "dos");    //Agregamos nuevas clases
console.log(divu.classList);
divu.classList.remove("uno", "dos"); //Eliminamos las clases
console.log(divu.classList);

//Comprobar si existen clases CSS 
//Con el método .classList.contains() podemos comprobar si existe una clase en un elemento HTML
const diva = document.querySelector("#page3");
console.log(diva.classList);     // ["info", "data", "dark"]
console.log(diva.classList.contains("info"));     // true
console.log(diva.classList.contains("warning"));  // false


//Conmutar o alternar clases CSS 
//Otro ayudante muy interesante es el del método .classList.toggle(), que lo que hace es añadir o eliminar la clase CSS dependiendo de si ya existía previamente. Es decir, añade la clase si no existía previamente o elimina la clase si existía previamente:
const dive = document.querySelector("#page3");
console.log(dive.classList); // ["info", "data", "dark"]
dive.classList.toggle("info"); // Como "info" existe, lo elimina. Devuelve "false"
console.log(dive.classList); // ["data", "dark"]
dive.classList.toggle("info"); // Como "info" no existe, lo añade. Devuelve "true"
console.log(dive.classList); // ["info", "data", "dark"]

//Reemplazar una clase CSS 
//Por último, tenemos un método .classList.replace() que nos permite reemplazar la primera clase indicada por parámetro, por la segunda
const divy = document.querySelector("#page3");
console.log('***********')
console.log(divy.classList);
divy.classList.add("warning");
console.log(divy.classList)
divy.classList.replace("dark", "light"); 
divy.classList.replace("warning", "error");
console.log(divy.classList)

