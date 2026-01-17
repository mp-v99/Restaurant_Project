import logoImage from "./illustrations/pozoramen.png"


const loadHome = function(){
    // DOM manipulation:

const mainElement = document.querySelector("main");

// Main children: 

const leftContainer = document.createElement("div");
const rightContainer = document.createElement("div");

// leftContainer children

const figureElement = document.createElement("figure");
const pozoRamenPic = document.createElement("img");
const figCaption = document.createElement("figcaption");

// rightContainer children

const description = document.createElement("p");
const menuBtn = document.createElement("btn");

// Container ID's:

leftContainer.id = "left-container";
rightContainer.id = "right-container";

// Figure image content:

pozoRamenPic.alt = "PozoRamen";
pozoRamenPic.src = logoImage;
pozoRamenPic.id = "logo-image"


// Figure caption text content: 

figCaption.textContent = "Mexican soul meets Japanese craft...";

// Description text content:

description.textContent = `Pozoramen is a cozy, colorful kitchen where Mexican soul meets Japanese craft, blending bold flavors, playful experimentation, and comfort-driven cooking.
                            Inspired by exploration rather than tradition, every dish is a joyful collision of cultures—familiar, unexpected, and a little magical.`
// Menu btb text content:

menuBtn.textContent = "Menu";

// Main append children: 

mainElement.appendChild(leftContainer);
mainElement.appendChild(rightContainer);

// Left container append children:

leftContainer.appendChild(figureElement);

figureElement.appendChild(pozoRamenPic);
figureElement.appendChild(figCaption);

// Right container append children: 

rightContainer.appendChild(description);
rightContainer.appendChild(menuBtn);


// Footer elements:

const footerElement =  document.createElement("footer");

// Footer text content:

footerElement.textContent = "Designed by Max Pons for The Odin Project";

}

export {loadHome}

