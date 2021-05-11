//Añade 2 elementos al array: "Morty" y "Summer". Muestra en consola el último personaje del array

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

//RESULTADO//

rickAndMortyCharacters.push("Morty","Summer"); // con el .push se agregan mas elementos a un array. Estos son colocados al final de este.

let ultimo = rickAndMortyCharacters.length - 1; //el .lengt te devuelve la cantidad total de elementos. Pero como los arrays se empiezan a recorrer desde el 0 debemos restarle 1 para tener la ultima posicion.

console.log(rickAndMortyCharacters[ultimo]);