//Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me

let removeElements = document.querySelectorAll('.fn-remove-me');


for (const removeThis of removeElements) {
    
     removeThis.remove();

}

