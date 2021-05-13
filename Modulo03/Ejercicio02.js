//Inserta dinamicamente en un html un div que contenga una p con javascript.

let NewDiv = document.createElement("div");

let NewP = document.createElement("p");

NewP.innerHTML= "HOLA MUNDO";

NewDiv.appendChild(NewP);

document.body.appendChild(NewDiv);

