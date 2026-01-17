import "./styles.css"

import {loadHome, unloadHome} from "./home.js"

// DOM Elements

const mainElement = document.querySelector("main");

const navBtn = document.querySelectorAll(".nav_btn");

// DOM E. Listeners:

navBtn.forEach((btn) => {
    btn.addEventListener("click", () => {

        switch (btn.id) {
            case "home_button": loadHome();
            // case "menu_button": loadMenu();
        }
    
    })
});

