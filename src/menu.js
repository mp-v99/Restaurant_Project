import logoImage from "./illustrations/pozoramen.png"
import onigiriImage from "./illustrations/onigiri_pastor.png"
import mokaImage from "./illustrations/mole_katsudon.png"

 // DOM selection:

 const mainElement = document.querySelector("main");

const loadMenu = function(){
   
// Content container:

const contentElement = document.createElement("div");
contentElement.id = "content"

// Content Element children: 

const gridContainer = document.createElement("div");


// Containers ID's:

gridContainer.id = "menu_container"

// Grid children

const pozoRamenContainer = document.createElement("div");
const onigiriContainer = document.createElement("div");
const mokaContainer = document.createElement("div");

pozoRamenContainer.className = "menu-image-item";
onigiriContainer.className = "menu-image-item";
mokaContainer.className = "menu-image-item";

const pozoRamenPic = document.createElement("img");
const onigiriPic = document.createElement("img");
const mokaPic = document.createElement("img");
// Figure image content:

pozoRamenPic.alt = "PozoRamen";
pozoRamenPic.src = logoImage;
pozoRamenPic.id = "logo-image"

onigiriPic.alt = "Onigiri-Pastor";
onigiriPic.src = onigiriImage;
onigiriPic.id = "onigiri-image"

mokaPic.alt = "Mole-Katsudon";
mokaPic.src = mokaImage;
mokaPic.id = "moka-image"

// Main append content:

mainElement.appendChild(contentElement);

// Content append grid: 

contentElement.appendChild(gridContainer);

// Grid container append children:

gridContainer.appendChild(pozoRamenContainer);
gridContainer.appendChild(onigiriContainer);
gridContainer.appendChild(mokaContainer);


// Menu items append children:

pozoRamenContainer.appendChild(pozoRamenPic);
onigiriContainer.appendChild(onigiriPic);
mokaContainer.appendChild(mokaPic);

}

export {loadMenu}