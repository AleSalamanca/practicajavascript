/*Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados
 y añade la propiedad isApproved a true o false en consecuencia. 
 Una vez lo tengas compruebalo con un console.log.*/


const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
];

/// RESULTADO ///


for (let index = 0; index < alumns.length; index++) {

    let counter = 0;
    if(alumns[index].T1){  //If tradicional
        counter++;
    }

    alumns[index].T2 ? counter++ : null ;  //Condicional ternario  Es igual al if pero abreviado.

    alumns[index].T3 ? counter++ : null ;  //Condicional ternario  

    counter >= 2 ?  alumns[index].isApproved = true : alumns[index].isApproved = false ;


};

console.log(alumns);