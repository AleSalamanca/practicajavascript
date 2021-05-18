
//Dado el siguiente javascript y html. 
//Añade la funcionalidad necesaria usando fetch() 
//para hacer una consulta a la api cuando se haga click en el botón, 
//pasando como parametro de la api, el valor del input.

const baseUrl = 'https://api.nationalize.io?name=';

function consultar(){

    const value = document.querySelector("input").value.toLowerCase();

    fetch(baseUrl+value).then(res => res.json().then( data =>
        console.log(data)
        ));


}