import { pageHome } from "./main.js";
import { pageAbout } from "./pageAbout.js";
import { pageEllye } from "./pageEllye.js";

// 0 = page Home
// 1 = page Ellye
// 2 = page About
export function navbarActive(params) {
    let listnavbar = ["home", "ellye", "about"]
    for (let i = 0; i < listnavbar.length; i++) {
        let element = document.getElementById(listnavbar[i]);
        
        // modification de la navbar
        if (i === params) {
            element.classList.add('active');
        } else if (element.classList.contains('active')) {
            element.classList.remove('active')
        }

        // activation des bouttons
        if (i === 0 & i !== params) {
            element.addEventListener('click', pageHome);
        }
        if (i === 1 & i !== params) {
            element.addEventListener('click', pageEllye);
        }
        if (i === 2 & i !== params) {
            element.addEventListener('click', pageAbout);
        }
    }
}

