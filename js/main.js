import { navbarActive } from "./useful.js";

let etape = 0;
export function pageHome() {
    navbarActive(0);
    let container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.classList.add('home');
    const subcontainerHome = document.createElement('div');
    subcontainerHome.className = 'subcontainerHome';

    if (etape === 0) { // Campus Saint Marc (mise en situation)
        const descriptionsSituation = document.createElement('div');
        descriptionsSituation.innerHTML = `
        Vous êtes un jeune médecin arrivant au <a href="https://www.becquerel.fr" target="blank">centre Henri Becquerel</a>.</br>
        vous avez pour mission d'effectuer des recherches sur les Lymphomes.
        Vous allez réaliser un parcours au milieu de site historiques pour découvrir cette maladie.
        </br></br>
        Votre route va vous permettre de rencontrer différents personnages qui vont enrichir vos connaissances et vous permettre de répondre aux différentes questions.
        </br></br>
        Les résultats pressent, les patients comptent sur vous, pour commençer votre aventure rendez-vous à la maison qui penche.`;

        subcontainerHome.appendChild(descriptionsSituation);
    } else if (etape === 1) { // La maison penchée
        const title = document.createElement('h1');
        title.textContent = "La maison penchée";
        subcontainerHome.appendChild(title);

        const listResponse = ["Symptômes guelle de bois", "Symptômes grippaux (fatigue, fiévre)", "Aucun symptômes"];
        const listResponseValid = ["Symptômes grippaux (fatigue, fiévre)"];
        let fieldset = createdivQuestion("Quels sont les premiers symptômes de la maladie ?", listResponse, listResponseValid);
        subcontainerHome.appendChild(fieldset);
    } else if (etape === 3) { // Cathédrale Notre Dame de Rouen
        const title = document.createElement('h1');
        title.textContent = "Cathédrale Notre Dame de Rouen";
        subcontainerHome.appendChild(title);

        const listResponse = ["Prise de sang", "IRM", "Palpasion", "Analyse d'Urine", "Endoscopie", "Examen visuel"]
        const listResponseValid = ["Prise de sang", "IRM", "Palpasion"];
        let fieldset = createdivQuestion("Par quel biais pouvons-nous diagnostiquer un lymphome ?", listResponse, listResponseValid);
        subcontainerHome.appendChild(fieldset);
    } else if (etape === 5) { // Opéra

    } else if (etape === 7) { // Place du Vieux Marché

    } else if (etape === 9) { // Musée des Beaux-Arts

    } else if (etape === 11) { // Hôtel de ville 

    } else if (etape === 13) { // Passage De La Petite Horloge

    } else if (etape === 15) { // Aître Saint-Maclou

    } else if (etape === 17) { // Campus Saint Marc (fin)

    }
    const buttonNext = createbuttonNext();
    subcontainerHome.appendChild(buttonNext);
    container.appendChild(subcontainerHome);
    activationButtonNext();
}

function explication(valueSelect) {
    navbarActive(0);
    let container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.classList.add('home');
    const subcontainerHome = document.createElement('div');
    subcontainerHome.className = 'subcontainerHome';

    // explication en fonction de l'etape
    if (etape === 2) { // La maison penchée
        let title = document.createElement('h1');
        title.textContent = "La maison penchée";
        subcontainerHome.appendChild(title);

        // validité de la réposne
        let divFelicitation = responseValid(valueSelect)
        subcontainerHome.appendChild(divFelicitation);

        let explication = document.createElement('div');
        explication.innerHTML = `
        Les premiers symptômes qui apparaissent sont des symptômes grippaux tels que la fatigue et la fiévre.
        `;
        subcontainerHome.appendChild(explication);


    } else if (etape === 4) { // Cathédrale Notre Dame de Rouen
        let title = document.createElement('h1');
        title.textContent = "Cathédrale Notre Dame de Rouen";
        subcontainerHome.appendChild(title);
        let divFelicitation = responseValid(valueSelect)
        subcontainerHome.appendChild(divFelicitation);

        let explication = document.createElement('div');
        explication.innerHTML = `
        Explication ici.
        `;
        subcontainerHome.appendChild(explication);
    } else if (etape === 6) { // Opéra

    } else if (etape === 8) { // Place du Vieux Marché

    } else if (etape === 10) { // Musée des Beaux-Arts

    } else if (etape === 12) { // Hôtel de ville 

    } else if (etape === 14) { // Passage De La Petite Horloge

    } else if (etape === 16) { // Aître Saint-Maclou

    } else if (etape === 18) { // Campus Saint Marc (fin)

    }
    let buttonNext = createbuttonNext();
    subcontainerHome.appendChild(buttonNext);
    container.appendChild(subcontainerHome);
    activationButtonNext();
}

pageHome();

function createdivQuestion(Contentquestion, listResponse, listResponseValid) {
    const fieldset = document.createElement('fieldset');
    const question = document.createElement('legend');
    question.textContent = Contentquestion;
    fieldset.appendChild(question);

    for (let i = 0; i < listResponse.length; i++) {
        const div = document.createElement('div');
        const response = document.createElement('input');
        response.id = `response${i}`;
        response.name = `responseRadio`;
        response.type = 'radio';
        if (listResponseValid.includes(listResponse[i])) {
            response.value = "valid";
        } else {
            response.value = "notValid";
        }
        div.appendChild(response);
        const label = document.createElement('label');
        label.textContent = listResponse[i];
        label.setAttribute('for', `response${i}`);
        div.appendChild(label);
        fieldset.appendChild(div);
    }

    return fieldset
}

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
            etape++
            console.log('etape : ', etape);
            if (etape === 2 ||
                etape === 4 ||
                etape === 6 ||
                etape === 8 ||
                etape === 10 ||
                etape === 12 ||
                etape === 14 ||
                etape === 16 ||
                etape === 18) {
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
                explication(valueSelect);
            } else {
                pageHome();
            }
        });
    }
}

function responseValid(valueSelect) {
    let divFelicitation = document.createElement('div');
    divFelicitation.className = 'divFelicitation';
    if (valueSelect === "valid") {
        divFelicitation.textContent = 'Bonne réponse';
        divFelicitation.style.backgroundColor = 'green';
    } else {
        divFelicitation.textContent = 'Mauvaise réponse';
        divFelicitation.style.backgroundColor = 'red';
    }
    return divFelicitation;
}