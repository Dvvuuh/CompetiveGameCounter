//DEFEAT BUTTON
 //Permet de selectionner un element unique par son #id
 document.querySelector('#btn2')

//Declaration de 'rest' : contient la span avec #rest
let spanHTML = document.querySelector('#rest')
let limitNumb = 15;
spanHTML.textContent = limitNumb;


//Permet de stocker un node(element html) en variable pour pouvoir être utiliser a tout moment
 let btn2 = document.querySelector('#btn2');

 let defeat = 0; 
     
 let reclass = document.querySelector('#recl');


 //Sert a reperer un evenement, il y'en a beaucoup d'autres (la fonction(fonction callback) est déclaré directement a l'interieur)
 btn2.addEventListener('click', ()=>{
    // rajoute une unité de nombre de défaite
    defeat ++;
    limitNumb--;
    console.log(defeat);
    rest.textContent = limitNumb; 
    
    if (defeat === 15) {
        defeat = 0;
        limitNumb = 15;
        reclass.textContent = 'Vous allez être reclassé'
    } else if (limitNumb === 14) {
        reclass.textContent = ''
    }
 })

//TODO : Que le bouton 1 compte les victoire et quelles soit afficher en format (victoire = / defaite =)

//VICTORY BUTTON
let vicSpan = document.querySelector('#vicRest')
let limitVic = 5 //=> 5;
vicSpan.textContent = limitVic;
 

let btn = document.querySelector('#btn');
let victory = 0;
let vicReclass = document.querySelector('#vicRecl')

btn.addEventListener('click', ()=>{
    victory ++;
    limitVic--;
    console.log(victory);
    vicRest.textContent = limitVic;

    if (victory === 5) {
        victory = 0;
        limitVic = 5;
        reclass.textContent ='Vous allez être reclassé1'
    } else if (limitVic === 4) {
        vicReclass.textContent = ''
    }
})

//TODO: QUAND UN DES COMPTEUR ARRIVE A SON TERME REINITIALISER L'AUTRE COMPTEUR