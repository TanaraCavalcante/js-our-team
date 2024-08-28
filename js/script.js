/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe.*/

//TODO RACCOLTA DATI
const card = document.getElementById('card');

//TODO ELABORAZIONE
//Creare un array del team
const team = [
    {name:'Wayne Barnett', profession:'Founder & CEO' , photo:'wayne-barnett-founder-ceo.jpg'},
    {name:'Angela Caroll', profession:'Chief Editor', photo:'angela-caroll-chief-editor.jpg'},
    {name:'Walter Gordon', profession:'Office Manager', photo:'walter-gordon-office-manager.jpg'},
    {name:'Angela Lopez', profession:'Social Media Manager', photo:'angela-lopez-social-media-manager.jpg'},
    {name:'Scott Estrada', profession:'Developer', photo:'scott-estrada-developer.jpg'},
    {name:'Barbara Ramos', profession:'Graphic Designer', photo:'barbara-ramos-graphic-designer.jpg'},
]
//Stampare su Console
console.table(team);
for (let i = 0; i < team.length; i++){
    const person = team[i];
    console.log(person.photo);
    console.log(person.name);
    console.log(person.Profession);
}
   
//TODO OUTPUT
let items = ''
for (let i = 0; i < team.length; i++){
    const person = team[i];
    items += `
    <div  class="card my-2" style="width: 18rem;">
        <img  src="img/${person.photo}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${person.name}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${person.profession}</h6>
        </div>
    </div>
    `
}

card.innerHTML = items;
