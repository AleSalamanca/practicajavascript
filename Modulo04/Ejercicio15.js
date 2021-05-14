// Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que
// sean par.


const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

// RESULTADO //

const pares = ages.filter((age)=>{ 
    
    if( age%2 == 0 ){

        return age; 
    }

});

console.log(pares);
