/*Convierte la siguiente función con un fetch utilizando async-await. 
Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;
````js
function getCharacters () {
    fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
}

getCharacters();
````

*/

async function getCharacters () {
    
   const result = await fetch('https://rickandmortyapi.com/api/character');
    if ( result ){
        const characters = await result.json();
        console.log(characters);
    }
}   


getCharacters();
