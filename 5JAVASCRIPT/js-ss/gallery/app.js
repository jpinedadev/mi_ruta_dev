let slideIndex= 1;
showSlides(slideIndex);

function plusSlides(n) {
   showSlides(slideIndex +=n);
}

function currentSlides(n) {
   showSlides(slideIndex =n);
}

function showSlides(n) {
   let i;
    let slides = document.getElementsByClassName("mySlides");
    let puntos = document.getElementsByClassName("punto");
    if (n>slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        
    }
    for (let i = 0; i < puntos.length; i++) {
        puntos[i].className = puntos[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    puntos[slideIndex-1].className += "active";

}





