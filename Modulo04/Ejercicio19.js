/*Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers
 que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
  introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
*/

const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

// RESULTADO //

function filtrar(event){

    console.log(event.target.value);

    const filtrados = streamers.filter((streamer)=>{

        if(streamer.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())){

            console.log (streamer.name);

        }

    })

}

const element = document.querySelector("#toFilterStreamers");

element.addEventListener("input",filtrar);
