//Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let NewDiv = document.createElement("div");


for (let index = 0; index < 6; index++) {
    
    let NewP = document.createElement("p");
    NewP.innerHTML = "Soy el parrafo número "+ (index+1);
    NewDiv.appendChild(NewP);
    
}

document.body.appendChild(NewDiv);