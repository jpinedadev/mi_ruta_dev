window.onload=inicio;
const NOMBRECORRECTO = "JULIO";

function inicio(){
  document.querySelector("body").insertAdjacentHTML("beforeend",`
    <input id="campo" type="text"/>
    <button>ACEPTAR</button>
    <div id="saludo"></div>
    `);
  document.querySelector("button").onclick=leer;
}

function leer(){
  let nombre = (document.querySelector("#campo").value)
  let nombreMayus = nombre.toUpperCase();
  let nombreFormt = nombre.substr(0,1).toUpperCase() + nombre.substr(1).toLowerCase();
  if(nombreMayus === NOMBRECORRECTO){
   document.querySelector("#saludo").innerHTML=`Hola ${nombreFormt}`
  }else{
    document.querySelector("#saludo").innerHTML = "";
    document.querySelector("#campo").value="";
    document.querySelector("#campo").focus();
  }
}
