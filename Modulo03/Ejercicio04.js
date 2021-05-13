//Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let NewP = document.createElement("p")
NewP.innerHTML = "Soy dinámico!";

document.body.appendChild(NewP);