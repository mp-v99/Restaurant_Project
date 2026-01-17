import logoImage from "./illustrations/pozoramen.png"

 // DOM selection:

 const mainElement = document.querySelector("main");

const loadHome = function(){
   
// Content container:

const contentElement = document.createElement("div");
contentElement.id = "content"

// Content Element children: 

const leftContainer = document.createElement("div");
const rightContainer = document.createElement("div");

// Containers ID's:

leftContainer.id = "left-container";
rightContainer.id = "right-container";

// leftContainer children

const figureElement = document.createElement("figure");
const pozoRamenPic = document.createElement("img");
const figCaption = document.createElement("figcaption");

// rightContainer children

const description = document.createElement("p");
const menuBtn = document.createElement("button");

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

// Main append content:

mainElement.appendChild(contentElement);

// Content append children: 

contentElement.appendChild(leftContainer);
contentElement.appendChild(rightContainer);

// Left container append children:

leftContainer.appendChild(figureElement);

figureElement.appendChild(pozoRamenPic);
figureElement.appendChild(figCaption);

// Right container append children: 

rightContainer.appendChild(description);
rightContainer.appendChild(menuBtn);

}

const unloadHome = function() {

    const leftContainer = document.querySelector("#left-container");
    const rightContainer = document.querySelector("#right-container");

    mainElement.removeChild(leftContainer);
    mainElement.removeChild(rightContainer)
}

export {loadHome, unloadHome }

