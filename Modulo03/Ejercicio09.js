//Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here


let DOMDivs = document.querySelectorAll(".fn-insert-here");
console.log(DOMDivs);

for (const DOMDiv of DOMDivs) {
    
    let NewP = document.createElement("p");
    NewP.innerHTML="Voy dentro!";
    
    DOMDiv.appendChild(NewP);
    
}