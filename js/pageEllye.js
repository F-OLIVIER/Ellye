import { navbarActive } from "./useful.js";

export function pageEllye() {
    navbarActive(1);
    let container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.classList.add('ellye');
    
    let subcontainerEllye = document.createElement('div');
    subcontainerEllye.className = 'subcontainerEllye';

    let divimg = document.createElement('div');
    divimg.className = 'divimg';
    let logoEllye = document.createElement('img');
    logoEllye.className = 'logoEllye';
    logoEllye.src = './assets/img/logo_ellye.png';
    divimg.appendChild(logoEllye)
    subcontainerEllye.appendChild(divimg);

    let nameAsso = document.createElement('h3');
    nameAsso.textContent = `ELLyE – Ensemble Leucémie Lymphomes Espoir est une association de patients et de proches de loi 1901 spécialisée dans les lymphomes, la leucémie lymphoïde chronique et la maladie de Waldenström.`;
    subcontainerEllye.appendChild(nameAsso);

    let description = document.createElement('div');
    description.innerHTML = `
    Créée en 2006 sous le nom de France Lymphome Espoir, elle obtient son agrément national du ministère de la santé en 2018, lui permettant de représenter officiellement les malades dans les instances réglementées.</br>
    En juin 2021 les associations France Lymphome Espoir et SILLC décident de fusionner pour créer une seule entité, ELLyE.`;
    subcontainerEllye.appendChild(description);

    let linkEllye = document.createElement('a');
    linkEllye.href = 'https://www.ellye.fr';
    linkEllye.target = 'blank';
    linkEllye.textContent = "Site de l'association Ellye";
    subcontainerEllye.appendChild(linkEllye);
    
    container.appendChild(subcontainerEllye);
}