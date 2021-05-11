/* Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas.
recuerda no usar frutas duplicadas. 
Finalmente, imprime el array resultante.
*/

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

//RESULTADO//


let flag = 0;

for (let index = 0; index < foodSchedule.length; index++) {
    
    if(!foodSchedule[index].isVegan){
        foodSchedule[index].name = fruits[flag];
        foodSchedule[index].isVegan = true;
        flag ++;
        
    }
    console.log(foodSchedule[index].name);    
}


