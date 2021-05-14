/*Crea una arrow function que tenga dos parametros a y b y que por defecto
 el valor de a = 10 y de b = 5. Haz que la función muestre por consola la 
 suma de los dos parametros
 
- Ejecuta esta función sin pasar ningún parametro
- Ejecuta esta función pasando un solo parametro
- Ejecuta esta función pasando dos parametros. 
*/

//Resultado//
const  suma = (x = 10, b = 5 ) => {

    console.log(x+b);

}

//1//
suma(); // Resultado 15

//2//
suma(6); // Resultado 11

//3//
suma(20,15); //Resultado 35