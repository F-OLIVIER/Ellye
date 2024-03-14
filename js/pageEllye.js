import { navbarActive } from "./useful.js";

export function pageEllye() {
    navbarActive(1);
    let container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.classList.add('ellye');
    
}