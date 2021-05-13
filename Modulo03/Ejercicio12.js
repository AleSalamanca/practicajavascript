/*Basandote en el siguiente html, añade un evento 'input'
que ejecute un console.log con el valor del input.
*/

function showthis(event){

    console.log(event.srcElement.value);

}
let DomElement = document.getElementById("showme");

DomElement.addEventListener("input", showthis);