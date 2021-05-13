
/*
Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
*/



function show (event){

    console.log(event);
    alert("Hola :) ");

}

let button = document.getElementById("btnToClick")

button.addEventListener("click", show, false );
