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


//TODO ELABORAZIONE
//Creare un array del team
const team = [
    {name:'Wayne Barnett', Profession:'Founder & CEO' , photo:'wayne-barnett-founder-ceo.jpg'},
    {name:'Angela Caroll', Profession:'Chief Editor', photo:'angela-caroll-chief-editor.jpg'},
    {name:'Walter Gordon', Profession:'Office Manager', photo:'Office Manager'},
    {name:'Angela Lopez', Profession:'Social Media Manager', photo:'angela-lopez-social-media-manager.jpg'},
    {name:'Scott Estrada', Profession:'Developer', photo:'scott-estrada-developer.jpg'},
    {name:'Barbara Ramos', Profession:'Graphic Designer', photo:'barbara-ramos-graphic-designer.jpg'},
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
