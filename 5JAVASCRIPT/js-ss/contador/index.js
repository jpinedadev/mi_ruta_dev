let numero = 0;
document.getElementById("numero").innerHTML = "<h1>"+ numero +"</h1>"

function aumentar() {
    numero +=1;
    document.getElementById("numero").innerHTML = "<h1>"+ numero +"</h1>"
}

function decrementar() {
    numero -=1;
    document.getElementById("numero").innerHTML = "<h1>"+ numero +"</h1>"
}

function reiniciar() {
    numero =0;
    document.getElementById("numero").innerHTML = "<h1>"+ numero +"</h1>"
}




