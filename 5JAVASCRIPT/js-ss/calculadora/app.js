
window.addEventListener('load', ()=>{

    const display = document.querySelector('.calculadora-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');
    const botonesArray = Array.from(keypadButtons);
    botonesArray.forEach((boton)=>{
       boton.addEventListener('click',()=>{
        calculadora(boton,display);
       }) 
    })
    
})

function calculadora(boton,display){
    switch (boton.innerHTML) {
        case 'C':
            borrar(display) ;
            break;
        case '=':
            calcular(display);
            break;
        default:
            actualizar(display,boton)
            break;
    }
}

function borrar(display){
    display.innerHTML = 0;
}

function calcular(display){
    display.innerHTML = eval(display.innerHTML)
}

function actualizar(display,boton){
   if (display.innerHTML == 0) {
       display.innerHTML = '';
   } 
    display.innerHTML += boton.innerHTML;
}







