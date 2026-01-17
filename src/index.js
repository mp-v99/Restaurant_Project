import "./styles.css"

import {loadHome} from "./home.js"

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
            case "home_button": loadHome();
            // case "menu_button": loadMenu();
        }
    
    })
});

