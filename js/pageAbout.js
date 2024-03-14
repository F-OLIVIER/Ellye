import { navbarActive } from "./useful.js";

export function pageAbout() {
    navbarActive(2);
    let container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.classList.add('about');

    let subcontainerEllye = document.createElement('div');

    let linkEllye = document.createElement('a');
    linkEllye.href = 'https://www.ellye.fr';
    linkEllye.target = 'blank';
    linkEllye.textContent = "Site de l'association Ellye";
    subcontainerEllye.appendChild(linkEllye);
    
    container.appendChild(subcontainerEllye);
}
