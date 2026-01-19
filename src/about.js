import restaurantImage from "./illustrations/restaurant.png"

 // DOM selection:

 const mainElement = document.querySelector("main");

const loadAbout = function(){
   
// Content container:

const contentElement = document.createElement("div");
contentElement.id = "content"

// Content Element children: 

const leftContainer = document.createElement("div");
const rightContainer = document.createElement("div");

// Containers ID's:

leftContainer.id = "left-container";
rightContainer.id = "right-container";

// rightContainer children


const restaurantIllustration = document.createElement("img");


// leftContainer children

const description = document.createElement("p");

// Figure image content:

restaurantIllustration.alt = "PozoRamen";
restaurantIllustration.src = restaurantImage;
restaurantIllustration.id = "logo-image"

// Description text content:

description.textContent = `Pozoramen is a small noodle bar inspired by late nights in Tokyo and the quiet chaos of Mexico City. We blend Japanese ramen techniques with familiar Mexican flavors, keeping things simple, warm, and intentional. No fusion theatrics — just good bowls, cold cerveza, and a space meant for slowing down, even if only for a moment.`

// Main append content:

mainElement.appendChild(contentElement);

// Content append children: 

contentElement.appendChild(leftContainer);
contentElement.appendChild(rightContainer);

// Right container append children:



rightContainer.appendChild(restaurantIllustration);


// Left container append children: 

leftContainer.appendChild(description);


}

export {loadAbout}