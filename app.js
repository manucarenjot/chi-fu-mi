let joueur1 = document.getElementById('joueur1');
let joueur2 = document.getElementById('joueur2');


let cissor = document.getElementById('cissor');
let rock = document.getElementById('rock');
let papper = document.getElementById('papper');

let tableau = ['cissor', 'rock', 'papper'];


cissor.addEventListener("click", function (){
    let randomTab = Math.round(Math.random() * tableau.length);
    joueur2.innerHTML = tableau[randomTab];
})

rock.addEventListener("click", function (){
    let randomTab = Math.round(Math.random() * tableau.length);
    joueur2.innerHTML = tableau[randomTab];
})

papper.addEventListener("click", function (){
    let randomTab = Math.round(Math.random() * tableau.length);
    joueur2.innerHTML = tableau[randomTab];
})