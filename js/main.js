import { navbarActive } from "./useful.js";

const list = {
    // Campus Saint Marc (mise en situation)
    0: {
        description: `
        Vous êtes un jeune médecin arrivant au <a href="https://www.becquerel.fr" target="blank">centre Henri Becquerel</a>.</br>
        vous avez pour mission d'effectuer des recherches sur les Lymphomes.
        Vous allez réaliser un parcours au milieu de site historiques pour découvrir cette maladie.
        </br></br>
        Votre route va vous permettre de rencontrer différents personnages qui vont enrichir vos connaissances et vous permettre de répondre aux différentes questions.
        </br></br>
        Les résultats pressent, les patients comptent sur vous, pour commençer votre aventure rendez-vous à la maison qui penche.`,
    },

    // La maison penchée
    1: {
        title: "La Maison Qui Penche",
        question: "Quels sont les premiers symptômes de la maladie ?",
        listResponse: ["Symptômes gueule de bois", "Symptômes grippaux (fatigue, fiévre)", "Aucun symptômes"],
        listResponseValid: ["Symptômes grippaux (fatigue, fiévre)"],
    },
    2: {
        explicatif: `Les premiers symptômes qui apparaissent sont des symptômes grippaux tels que la fatigue et la fiévre.`,
    },

    // Cathédrale Notre Dame de Rouen
    3: {
        title: "Cathédrale Notre Dame de Rouen",
        question: "Par quel biais pouvons-nous diagnostiquer un lymphome ?",
        listResponse: ["Examen visuel", "Palpasion", "Prise de sang", "Analyse d'Urine", "IRM", "Endoscopie"],
        listResponseValid: ["Prise de sang", "IRM", "Palpasion"],
    },
    4: {
        explicatif: `Les méthodes permettant de diagnostiquer la maladie sont :</br>
        • prise de sang</br>
        • palpasion des ganglions par un médecin</br>
        • IRM</br>
        </br>
        Pour plus de detail : <a href="https://www.ellye.fr/diagnostic" target="blank">lien vers les méthodes de diagnostic de la maladie</a>`,
    },

    // Opéra
    5: {
        title: "Opéra de Rouen Normandie",
        question: "Comment s'organise les soins pour un lymphome ?",
        listResponse: ["Hémathologue -> IRM -> Chimiothérapie", "IRM -> Hémathologue -> Médicament", "Chimiothérapie -> IRM -> Hémathologue"],
        listResponseValid: ["Hémathologue -> IRM -> Chimiothérapie"],
    },
    6: {
        explicatif: `Voici l'ordre a suivre :</br>
        1  - Hémathologue (diagnostique)
        2  - IRM (détection, vision), 
        3a - Chimiothérapie (traitement de fond)
        3b - Si échec de la chimiothérapie : radiothérapie`,
    },

    // Place du Vieux Marché
    7: {
        title: "Place du Vieux Marché",
        question: "Comment faut t'il vivre avec la maladie ?",
        listResponse: ["Vivre normalement", "Vivre sous traitement", "Vivre à l'Hospitâl"],
        listResponseValid: ["Vivre sous traitement"],
    },
    8: {
        explicatif: `Une personne malade aura une prise de sang tous les 21 jours et devra vivre en ayant de la chimiothérapie en fonction des résultats de la prise de sang</br>
        Le cote phycologique n'ai pas a négliger, ont estime que sa represente 50% de la guérisons de la maladie/</br>
        Pour plus de detail : <a href="https://www.ellye.fr/stades-et-grades" target="blank">lien vers les différents stade de la maladie</a>`,
    },

    // Musée des Beaux-Arts
    9: {
        title: "Musée des Beaux-Arts",
        question: "Comment a été découvert le lymphome ?",
        listResponse: ["découverte par hazard par le professeur TILLY (Rouennais) dans les années 1970"],
        listResponseValid: [""],
    },
    10: {
        explicatif: `
        <img src="./assets/img/pr_herve_tilly.jpg" /></br>
        Photo du professeur Hervé TILLY</br>`,
    },

    // Hôtel de ville 
    11: {
        title: "Hôtel de ville ",
        question: "Combien y a t'il de nouvelle personnes atteintes par ans des lymphomes ?",
        listResponse: ["100", "1000", "10 000", "25 000", "40 000", "100 000"],
        listResponseValid: ["40 000"],
    },
    12: {
        explicatif: `
        40 000 nouveaux cas par ans 
        lien site Ellye`,
    },

    // Passage De La Petite Horloge
    13: {
        title: "Passage De La Petite Horloge",
        question: "Quel est la durée moyenne de traitement d'un lymphome ?",
        listResponse: ["1 semaines", "1 mois", "18 mois", "1 ans", "3 ans", "10 ans", "25 ans", "a vie"],
        listResponseValid: ["18 mois"],
    },
    14: {
        explicatif: ``,
    },

    // Aître Saint-Maclou
    15: {
        title: "Aître Saint-Maclou",
        question: "Quels traitement est possible ? ?",
        listResponse: ["Chimiothérapie", "Radiothérapie", "CarTcel", "Médicaments"],
        listResponseValid: ["Chimiothérapie", "Radiothérapie", "CarTcel"],
    },
    16: {
        explicatif: `
        Chimiothérapie
        Radiothérapie
        CarTcel`,
    },

    // Campus Saint Marc (fin)
    17: {
        description: ``,
    },
}

let etape = 0;
let nbValidResponse = 0;
export function pageHome() {
    navbarActive(0);
    let container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.classList.add('home');
    const subcontainerHome = document.createElement('div');
    subcontainerHome.id = 'subcontainerHome';
    subcontainerHome.className = 'subcontainerHome';

    if (etape === 0) {
        const descriptionsSituation = document.createElement('div');
        descriptionsSituation.innerHTML = list[etape].description;

        subcontainerHome.appendChild(descriptionsSituation);
    } else if (etape === 1 || etape === 3 || etape === 5 || etape === 7 || etape === 9 || etape === 11 || etape === 13 || etape === 15) {
        // titre
        const title = document.createElement('h1');
        title.textContent = list[etape].title;
        subcontainerHome.appendChild(title);

        // zone de réponse
        const fieldset = document.createElement('fieldset');
        const question = document.createElement('legend');
        question.textContent = list[etape].question;
        fieldset.appendChild(question);

        // option des réponses
        for (let i = 0; i < list[etape].listResponse.length; i++) {
            const div = document.createElement('div');
            const response = document.createElement('input');
            response.id = `response${i}`;
            response.name = `responseRadio`;
            response.type = 'radio';
            if (list[etape].listResponseValid.includes(list[etape].listResponse[i])) {
                response.value = "valid";
            } else {
                response.value = "notValid";
            }
            div.appendChild(response);
            const label = document.createElement('label');
            label.textContent = list[etape].listResponse[i];
            label.setAttribute('for', `response${i}`);
            div.appendChild(label);
            fieldset.appendChild(div);
        }
        subcontainerHome.appendChild(fieldset);
    } else if (etape === 17) {
        // afficher le nombre de réponse correct
        let divnbValidResponse = document.createElement('div');
        divnbValidResponse.innerHTML = `
        Félicitation, vous êtes arrivé au bout de votre quête</br></br>
        Vous avez optenue : ${nbValidResponse} bonnes réponse / 8 questions`;
        divnbValidResponse.className = 'divnbValidResponse';
        subcontainerHome.appendChild(divnbValidResponse);

        // description final
        let explication = document.createElement('div');
        explication.innerHTML = list[etape].explicatif;
        subcontainerHome.appendChild(explication);

    }
    const buttonNext = createbuttonNext();
    subcontainerHome.appendChild(buttonNext);
    container.appendChild(subcontainerHome);
    activationButtonNext();
}

function explication(valueSelect) {
    const subcontainerHome = document.getElementById('subcontainerHome');

    // explication en fonction de l'etape
    if (etape === 2 || etape === 4 || etape === 6 || etape === 8 || etape === 10 || etape === 12 || etape === 14 || etape === 16) {
        let divFelicitation = document.createElement('div');
        divFelicitation.className = 'divFelicitation';
        if (valueSelect === "valid") {
            divFelicitation.textContent = 'Bonne réponse';
            divFelicitation.style.backgroundColor = 'green';
            nbValidResponse++
        } else {
            divFelicitation.textContent = 'Mauvaise réponse';
            divFelicitation.style.backgroundColor = 'red';
        }
        subcontainerHome.appendChild(divFelicitation);

        let explication = document.createElement('div');
        explication.innerHTML = list[etape].explicatif;
        subcontainerHome.appendChild(explication);
    } else if (etape === 18) {

    }
    if (document.getElementById('buttonNext')) {
        document.getElementById('buttonNext').remove();
    }
    let buttonNext = createbuttonNext();
    subcontainerHome.appendChild(buttonNext);
    activationButtonNext();
}

pageHome();

function createbuttonNext() {
    let button = document.createElement('button');
    button.id = 'buttonNext';
    button.className = 'buttonNext';
    button.textContent = 'suite';
    return button
}

function activationButtonNext() {
    if (document.getElementById('buttonNext')) {
        document.getElementById('buttonNext').addEventListener('click', () => {
            // console.log('etape : ', etape);
            if (etape === 1 ||
                etape === 3 ||
                etape === 5 ||
                etape === 7 ||
                etape === 9 ||
                etape === 11 ||
                etape === 13 ||
                etape === 15 ||
                etape === 17) {
                // récupération de la validité de la réponse
                let valueSelect = '';
                const radioButtons = document.querySelectorAll('input[name="responseRadio"]');
                for (let i = 0; i < radioButtons.length; i++) {
                    const radioButton = radioButtons[i];
                    if (radioButton.checked) {
                        valueSelect = radioButton.value;
                        break;
                    }
                }
                // affichage de l'explication
                if (valueSelect != '') {
                    etape++
                    explication(valueSelect);
                }
            } else {
                etape++
                pageHome();
            }
        });
    }
}

