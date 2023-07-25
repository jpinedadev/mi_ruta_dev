
function openCity(evt,cityName) {
    
    let i, pestañacontent,pestañalinks;
    pestañacontent = document.getElementsByClassName("pestañacontent");
    for (let i = 0; i < pestañacontent.length; i++) {
        pestañacontent[i].style.display = "none";
    }

    pestañalinks = document.getElementsByClassName("pestañalinks");
    for (let i = 0; i < pestañalinks.length; i++) {
        pestañalinks[i].className = pestañalinks[i].className.replace("active", "");
    }
    document.getElementById(cityName).style.display = "block";
}



