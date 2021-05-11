//Elimina el segundo elemento del array y muestra el array por consola.


const RickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

//RESULTADO//

RickAndMortyCharacters.splice(1,1); //El .splice elimina elementos de un array, el primer valor es la posicion donde empieza a borrar y el segundo valor es cuantos valores debe borrar. Aqui le decimos que inicie en [1] y borre 1 .

console.log(RickAndMortyCharacters);