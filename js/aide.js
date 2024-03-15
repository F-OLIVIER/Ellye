import { navbarActive } from "./useful.js";

const aide = {
    // Campus Saint Marc (mise en situation)
    0: {
        title: "Point de départ",
        adress: ``,
        description: ``,
    },

    // La maison penchée
    1: {
        title: "La maison penchée",
        adress: ``,
        description: ``,
    },

    // Cathédrale Notre Dame de Rouen
    2: {
        title: "Cathédrale Notre Dame de Rouen",
        adress: ``,
        description: ``,
    },

    // Opéra
    3: {
        title: "Opéra",
        adress: ``,
        description: ``,
    },

    // Place du Vieux Marché
    4: {
        title: "Place du Vieux Marché",
        adress: ``,
        description: ``,
    },

    // Musée des Beaux-Arts
    5: {
        title: "Musée des Beaux-Arts",
        adress: ``,
        description: ``,
    },

    // Hôtel de ville 
    6: {
        title: "Hôtel de ville ",
        adress: ``,
        description: ``,
    },

    // Passage De La Petite Horloge
    7: {
        title: "Passage De La Petite Horloge",
        adress: ``,
        description: ``,
    },

    // Aître Saint-Maclou
    8: {
        title: "Aître Saint-Maclou",
        adress: ``,
        description: ``,
    },

    // Campus Saint Marc (fin)
    9: {
        title: "Arrivée",
        adress: ``,
        description: ``,
    },
}


export function pageAide() {
    navbarActive(1);
    let container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let subcontainerAide = document.createElement('div');
    subcontainerAide.className = 'subcontainerAide';
    console.log('ENTER', aide.length)


    for (let i = 0; i < 10; i++) {
        const element = aide[i];
        console.log('element', element)
        let detail = document.createElement('details');
        let summary = document.createElement('summary');
        summary.textContent = element.title;
        detail.appendChild(summary);

        let adress = document.createElement('div');
        adress.innerHTML = `Adresse :</br>${element.adress}`;
        detail.appendChild(adress);
        let description = document.createElement('div');
        description.innerHTML = `Description :</br>${element.description}
            `;
        detail.appendChild(description);
        subcontainerAide.appendChild(detail);
    }

    container.appendChild(subcontainerAide);
}