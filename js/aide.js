import { navbarActive } from "./useful.js";

const aide = {
    // Campus Saint Marc (mise en situation)
    0: {
        title: "Point de départ",
        adress: `24 Pl. Saint-Marc, 76000 Rouen`,
        description: `Le Campus Saint Marc est un établissement d’études supérieures et de formations professionnelles privées françaises à Rouen, certifié par Bureau Veritas depuis le 28 juin 2017. Ces formations sont proposées sous 4 grandes écoles que sont l’ISCOM, PIGIER Performance, Zone01`,
    },

    // La maison penchée
    1: {
        title: "La Maison Qui Penche",
        adress: `102 Rue Malpalu, 76000 Rouen`,
        description: `Située face à l'église Saint-Maclou de Rouen, cette habitation détonne dans le paysage. À tel point qu'elle a été surnommée "la maison qui penche"`,
    },

    // Cathédrale Notre Dame de Rouen
    2: {
        title: "Cathédrale Notre Dame de Rouen",
        adress: `Pl. de la Cathédrale, 76000 Rouen`,
        description: `La cathédrale Notre-Dame, officiellement cathédrale primatiale Notre-Dame-de-l'Assomption de Rouen, est le monument le plus prestigieux de la ville de Rouen`,
    },

    // Opéra
    3: {
        title: "Opéra de Rouen Normandie",
        adress: `7 Rue du Dr Robert Rambert, 76000 Rouen`,
        description: `Le Théâtre des Arts est l'une des deux salles de l'Opéra de Rouen Normandie. Avec ses 1 300 places et sa grande scène de 16 mètres d’ouverture, il sert de résidence historique à l'Opéra de Rouen Normandie. Inauguré en 1962, ce troisième bâtiment fut construit à quelques rues du tout premier théâtre des Arts de 1776.`,
    },

    // Place du Vieux Marché
    4: {
        title: "Place du Vieux Marché",
        adress: `Pl. du Vieux Marché 76000 Rouen`,
        description: `C'est sur cette place, en pleine guerre de Cent Ans que Jeanne d'Arc est brûlée vive le 30 mai 1431. L'endroit, tel qu'a pu l'apercevoir Jeanne d'Arc ne ressemblait pas à ce qu'il est aujourd'hui. La place était plus petite et son espace était occupé par l'église Saint-Sauveur, l'église Saint-Michel et par une grande halle de marché. C'était également le lieu habituel des exécutions. Une grande croix a été élevée à l'emplacement du bûcher.
        </br>
        Au milieu de la place, les vestiges de l'ancienne église Saint-Sauveur ont été dégagés. C'est dans cette modeste église paroissiale que Pierre Corneille fut baptisé, sa maison natale, rue de la Pie, aujourd'hui transformée en musée se situant à proximité.
        </br>
        Aujourd'hui, c'est une place vivante, autour de laquelle se trouvent des restaurants et des bars.`,
    },

    // Musée des Beaux-Arts
    5: {
        title: "Musée des Beaux-Arts",
        adress: `Esp. Marcel Duchamp, 76000 Rouen`,
        description: `Le musée des Beaux-Arts de Rouen est un établissement muséographique situé dans le centre-ville de Rouen, en Normandie. C'est l'un des plus riches musées du genre en province.`,
    },

    // Hôtel de ville 
    6: {
        title: "Hôtel de ville",
        adress: `2 Pl. du Général de Gaulle, 76000 Rouen`,
        description: `L'hôtel de ville de Rouen est le bâtiment qui héberge l'administration municipale de Rouen depuis 1800. Avant son installation dans l'ancien dortoir des moines de l'abbaye Saint-Ouen, l'autorité municipale rouennaise a siégé dans d'autres bâtiments situés sur le territoire.`,
    },

    // Passage De La Petite Horloge
    7: {
        title: "Passage De La Petite Horloge",
        adress: `9 Rue des Faulx, 76000 Rouen`,
        description: `Outre le célèbre et emblématique Gros horloge, il y a à Rouen (Seine-Maritime) une petite horloge plus modeste, discrètement placée, mais qui vaut assurément le détour !`,
    },

    // Aître Saint-Maclou
    8: {
        title: "Aître Saint-Maclou",
        adress: `186 Rue Martainville, 76000 Rouen`,
        description: `L'aître Saint-Maclou est un ancien aître, charnier datant du XIVᵉ siècle, situé au nᵒ 184, rue de Martainville sur la commune française de Rouen dans le département de la Seine-Maritime en région Normandie. Il constitue un des rares exemples d'ossuaire de ce type subsistant en Europe.`,
    },

    // Campus Saint Marc (fin)
    9: {
        title: "Arrivée",
        adress: `24 Pl. Saint-Marc, 76000 Rouen`,
        description: ``,
    },
}


export function pageAide() {
    navbarActive(3);
    let container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let subcontainerAide = document.createElement('div');
    subcontainerAide.className = 'subcontainerAide';

    for (let i = 0; i < 10; i++) {
        const element = aide[i];
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
