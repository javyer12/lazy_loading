/* <div class=" p-4">
    <img 
        class = "mx-auto"
        width= "300"
        src= "https://randomfox.ca/images/${nombre_image}"
        alt="fox"
    />
</div>
*/

import { registerImage } from "./lazy";

const max = 122;
const min = 1;

const randomer = () => Math.floor(Math.random() * (max - min )) + min;

const createImageNode  = () => {
    const container = document.createElement("div");
    container.className = "p-4";

    const image = document.createElement("img");
    image.className = "mx-auto";
    image.width = "300";
    image.height = "200";
    image.src = `https://randomfox.ca/images/${randomer()}.jpg`;

    container.appendChild(image);

    return container;

}
const mountNode = document.getElementById("images");

const AddImage = document.getElementById("addImage");

const addNewImage = () => {
    const newFox = createImageNode();
    mountNode.appendChild(newFox);
    registerImage(newFox);
}

AddImage.addEventListener("click",addNewImage );

//CODE TO ADD
/* agregar un fondo gris, mientras cargan
    agregar button para limpiar
    algunos estilos y animaciones
*/