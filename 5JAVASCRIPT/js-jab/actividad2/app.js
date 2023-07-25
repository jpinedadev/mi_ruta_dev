window.onload=inicio;
let imagen,cajaimagen,boton;

function inicio(){
 document.querySelector("body").insertAdjacentHTML("beforeend",`
    <button class="boton">Botón 1</button> 
    <button class="boton">Botón 2</button> 
    <button class="boton">Botón 3</button> 
    <div id="imagen"><img src="img/img.jpg" /></div>
   `);
  imagen=document.querySelector("img");
  cajaimagen=document.querySelector("#imagen");
  boton=document.querySelectorAll(".boton");

  boton[0].onclick=accion1;
  boton[1].onclick=accion2;
  boton[2].onclick=accion3;
  resaltar();
}

function accion1(){
  imagen.style.backgroundColor="#1162ac";
  cajaimagen.style.borderRadius="50%";
  cajaimagen.style.transform="rotate(10deg)";
  boton[0].style.visibility="hidden"; 
}

function accion2(){
  if(cajaimagen.style.display=="none"){
    cajaimagen.style.display="block";
    resaltar(); 
  }
  else{
    cajaimagen.style.display="none";
  }
}

function accion3(){
  imagen.style=null;
  cajaimagen.style=null;
  boton[0].style=null;
  boton[2].style=null;
  resaltar();
}

function resaltar(){
  boton[1].style.background="#e44d26";
  boton[1].style.borderColor="#e44d26";
}



