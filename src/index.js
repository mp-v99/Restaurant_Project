import "./styles.css"

import {loadHome, unloadHome} from "./home.js"

loadHome();

// DOM Elements

const mainElement = document.querySelector("main");
const homeBtn = document.querySelector("#home_button");
const menuBtn = document.querySelector("#menu_button");
const aboutBtn = document.querySelector("#about_button");

// DOM E. Listeners:

homeBtn.addEventListener("click", () => {
    loadHome();
});