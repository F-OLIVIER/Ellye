import { pageAide } from "./aide.js";
import { pageHome } from "./main.js";
import { pageAbout } from "./pageAbout.js";
import { pageEllye } from "./pageEllye.js";

// 0 = page Home
// 1 = page Ellye
// 2 = page About
// 3 = page aide
export function navbarActive(params) {
    let listnavbar = ["home", "ellye", "about", "aide"]
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
        if (i === 3 & i !== params) {
            element.addEventListener('click', pageAide);
        }
    }
}

