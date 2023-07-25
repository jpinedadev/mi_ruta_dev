var myNodeList = document.getElementsByTagName("LI");
var i;
for(i=0; i< myNodeList.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

var close = document.getElementsByClassName("close")
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.querySelector('ul');
list.addEventListener('click',function(ev){
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked')
    }
},false);

function nuevoElemento(){
   var li = document.createElement("li") ;
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("you must write something!")
    }else{
        document.getElementById("miLista").appendChild(li);
    }
    document.getElementById("myInput").value =  "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt)
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
        
    }

}

