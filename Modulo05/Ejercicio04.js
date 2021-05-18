/*En base al ejercicio anterior. Crea dinamicamente un elemento <p> p
or cada petición a la api que diga...
'El nombre X tiene un Y porciento de ser de Z' etc etc.
*/



const baseUrl = 'https://api.nationalize.io?name=';
const container = document.getElementById("container");


function consultar(){

    const value = document.querySelector("input").value.toLowerCase();

    fetch(baseUrl+value).then(res => res.json().then( data => {
        
        //container.innerHTML= ""; Si se quiere borrar el contenedor con cada nueva consulta descomentar esto
        if(data.country[0]){
            const newp = document.createElement("p");
            newp.innerHTML="El nombre "+data.name+" tiene un "+data.country[0].probability+" porciento de ser de "+data.country[0].country_id+" y un "+data.country[1].probability+" porciento de ser de "+data.country[1].country_id+".";
            container.appendChild(newp);
        }else{
            alert("El nombre "+data.name+" no existe en la bd");
        }
    }));


}