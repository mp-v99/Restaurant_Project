import "./styles.css"

import {loadHome} from "./home.js"
import {loadMenu} from "./menu.js"
import {loadAbout} from "./about.js";

loadHome();

// DOM Elements

const mainElement = document.querySelector("main");

const navBtn = document.querySelectorAll(".nav_btn");

// DOM E. Listeners:

navBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        
        const contentElement = document.querySelector("#content"); 
        mainElement.removeChild(contentElement);

        switch (btn.id) {
            case "home_button": 
                    loadHome();
                    break;
            case "menu_button": 
                    loadMenu();
                    break;
            case "about_button":
                    loadAbout();
                    break;
        }
    })
});