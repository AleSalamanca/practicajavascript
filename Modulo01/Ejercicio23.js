//Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad 
//precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad,
// precedido del texto "Usuarios mayores de edad:".

const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];

//RESULTADO//

let menores = "";
let mayores = "";

for (let index = 0; index < users.length; index++) {
    
    if(users[index].years>=18){
        mayores += users[index].name + " ";
    }else{
        menores += users[index].name + " ";
    }
}

console.log("Usuarios menores de edad:" + menores);

console.log("Usuarios mayores de edad:" + mayores);