/*Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. 
Pelicula pequeña, menos de 100 minutos,
 pelicula mediana, mas de 100 minutos 
 y menos de 200 y pelicula grande, mas de 200 minutos. 
 Imprime cada array  por consola.*/


const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];


//RESULTADO//


let moviexS = [];
let movieM = [];
let movieL = [];

for (let index = 0; index < movies.length; index++) {
   if (movies[index].durationInMinutes<100) {
        
        moviexS.push(movies[index].name);

   }else if(movies[index].durationInMinutes>=100 && movies[index].durationInMinutes<200){
   
        movieM.push(movies[index].name);
   
    } else{

        movieL.push(movies[index].name);
   
    }
    
}

console.log(moviexS);
console.log (movieM);
console.log(movieL);