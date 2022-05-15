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
import h from "hyperscript";

const max = 122;
const min = 1;

const randomer = () => Math.floor(Math.random() * (max - min )) + min;

const createImageNode  = () => {
   
    const image = h("img.mx-auto", {
        width: "290",
        height: "280",
        src : `https://randomfox.ca/images/${randomer()}.jpg`,
    });

    const container = h("div.p-4.mt-3",{
        width: "150",
        opacity:" 25",
        style: "background-color: rgba(213,233,222,0.073)",
    },
     image);
    // const background = h("div", {
    //     style: "background-color: gray",
    //     width: "290px",
    //     height: "340px"
    // })
    // .appendChild(container);

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