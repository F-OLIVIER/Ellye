import { navbarActive } from "./useful.js";

export function pageAbout() {
    navbarActive(2);
    let container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.classList.add('about');

    let subcontainerAbout = document.createElement('div');
    subcontainerAbout.className = 'subcontainerAbout';

    let descriptif = document.createElement('div');
    descriptif.textContent = `Application imaginé et réalisé lors d'un challenge inter-école du campus Saint-Marc avec les écoles PIGIERS, ISCOM et Zone 01`;
    subcontainerAbout.appendChild(descriptif)

    let concept = document.createElement('h3');
    concept.textContent = 'Concept crée par :';
    subcontainerAbout.appendChild(concept);
    let contentConcept = document.createElement('div');
    contentConcept.innerHTML = `
    • BAILLEUL Lilou</br>
    • COUSIN Lilou</br>
    • HORVILLE Anthony</br>
    • MUSTEL Quentin</br>
    • SAINT-AUBUN Gabrielle</br>
    • TEMPEZ Zoé<br>
    • THOREL Marie<br>
    `;
    subcontainerAbout.appendChild(contentConcept);
    let creation = document.createElement('h3');
    creation.textContent = 'Application développé par :';
    subcontainerAbout.appendChild(creation);
    let contentcreation = document.createElement('div');
    contentcreation.innerHTML = '• OLIVIER Fabien';
    subcontainerAbout.appendChild(contentcreation);
    
    container.appendChild(subcontainerAbout);
}
