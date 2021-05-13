//Basandote en el siguiente array crea una lista ul > li con los textos del array.


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let NewUl =  document.createElement("ul");

for (let index = 0; index < apps.length; index++) {
    
    let NewLi = document.createElement("li");
    NewLi.innerHTML= apps[index];

    NewUl.appendChild(NewLi);
    
}

document.body.appendChild(NewUl);