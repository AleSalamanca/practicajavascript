//Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.


let baseUrl = 'https://api.nationalize.io?name=pepe';

async function consultar(){
    let response = await fetch(baseUrl);
    if (response) {
        let myBlob = await response.json();
        console.log(myBlob);
    }
}

consultar();