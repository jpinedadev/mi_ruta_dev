const menu = document.querySelector('#menu');
const boton = document.querySelector('#boton');

boton.addEventListener('click' , ()=>{
  console.log('click')
  menu.classList.toggle('hidden')
})
