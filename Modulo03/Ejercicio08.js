/*Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. 
Recuerda que no solo puedes insertar elementos con .appendChild.
*/



const LastDiv = document.querySelectorAll('div')[1];

const NewP = document.createElement('p');

NewP.innerHTML = 'Voy en medio!'

document.body.insertBefore(NewP, LastDiv);