import logoImage from "./illustrations/pozoramen.png"
import onigiriImage from "./illustrations/onigiri_pastor.png"
import mokaImage from "./illustrations/mole_katsudon.png"

 // DOM selection:

 const mainElement = document.querySelector("main");

const loadMenu = function(){
   
// Content container:

const contentElement = document.createElement("div");
contentElement.id = "content";

// Content Element children: 

const gridContainer = document.createElement("div");


// Containers ID's:

gridContainer.id = "menu_container";

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

const pozoRamenBioContainer = document.createElement("div");
const onigiriBioContainer = document.createElement("div");
const mokaBioContainer = document.createElement("div");

pozoRamenBioContainer.className = "item-bio";
onigiriBioContainer.className = "item-bio";
mokaBioContainer.className = "item-bio";

const pozoRamenTitle = document.createElement("h2");
const pozoramenBio = document.createElement("p");
const onigiriTitle = document.createElement("h2");
const onigiriBio = document.createElement("p");
const mokaTitle = document.createElement("h2");
const mokaBio = document.createElement("p");


// Item image content:

pozoRamenPic.alt = "PozoRamen";
pozoRamenPic.src = logoImage;
pozoRamenPic.id = "logo-image";

onigiriPic.alt = "Onigiri-Pastor";
onigiriPic.src = onigiriImage;
onigiriPic.id = "onigiri-image";

mokaPic.alt = "Mole-Katsudon";
mokaPic.src = mokaImage;
mokaPic.id = "moka-image";


// Item text content:

pozoRamenTitle.textContent = "Pozoramen";
pozoramenBio.textContent = `A deep, comforting broth where springy noodles meet tender hominy, layered with sauces and toppings that shouldn’t work together—but somehow do.
Bold, soulful, and unmistakably Pozoramen.`

onigiriTitle.textContent = "Onigiri al Pastor"
onigiriBio.textContent = `Hand-shaped rice triangles stuffed with marinated pork, pineapple glaze, and fire-kissed spices, wrapped in nori instead of tortilla.
Street food from a world that never existed—until now.`

mokaTitle.textContent = "Mole Katsudon"
mokaBio.textContent = `Crispy breaded cutlet resting on warm rice, drenched in rich, dark mole with cacao depth and gentle heat.
Heavy, comforting, and made for late nights and boss fights.`

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

pozoRamenContainer.appendChild(pozoRamenBioContainer);
onigiriContainer.appendChild(onigiriBioContainer);
mokaContainer.appendChild(mokaBioContainer);

// Bio append children:

pozoRamenBioContainer.appendChild(pozoRamenTitle);
pozoRamenBioContainer.appendChild(pozoramenBio);
onigiriBioContainer.appendChild(onigiriTitle);
onigiriBioContainer.appendChild(onigiriBio);
mokaBioContainer.appendChild(mokaTitle);
mokaBioContainer.appendChild(mokaBio);

}

export {loadMenu}