/*Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta".
 Usa la función .includes de javascript.
*/

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

//RESULTADO//

for (let index = 0; index < products.length; index++) {
    if(products[index].includes("Camiseta")){ ///si el producto incluye el string "Camiseta" en su string, devolvera true.

        console.log(products[index]);

    }
    
}