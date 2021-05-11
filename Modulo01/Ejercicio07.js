//Dado el siguiente javascript, actualiza el valor de la variable `globalBasePrice` a 25000 
//y actualiza la propiedad `finalPrice` de todos los coches con el valor de su propiedad `basePrice` 
//más el valor de la variable `globalBasePrice`.

let globalBasePrice = 10000;
const car1 = { name: "BMW m&m", basePrice: 50000, finalPrice: 60000 };
const car2 = { name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000 };

//RESPUESTA// 
globalBasePrice = 250000; //Asignamos un nuevo valor 

car1.basePrice = car1.basePrice + globalBasePrice; //Para sumar un valor a otro ya existente podemos igualarlo al mismo valor + el que queremos agregar 
car2.basePrice += globalBasePrice; // o simplemente podemos utilizar += que lo que hace es sumar el nuevo valor al valor existente. 

console.log (car1.basePrice);
console.log(car2.basePrice);