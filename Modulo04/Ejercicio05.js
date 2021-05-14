/*En base al siguiente javascript, usa destructuring para crear las variables name y itv 
con sus respectivos valores. 
Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años 
y comprueba que todo esta bien imprimiendolo.

*/

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name, itv} = car; 

const [year1 , year2, year3 ] = itv;

console.log ( "El nombre del auto es "+name+" y los años de la itv son "+year1+", "+year2+" y "+year3 ); 