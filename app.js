let joueur1 = document.getElementById('joueur1');
let joueur2 = document.getElementById('joueur2');


let cissor = document.getElementById('cissor');
let rock = document.getElementById('rock');
let papper = document.getElementById('papper');

let tableau = ['cissor', 'rock', 'papper'];


//à modifier
function pcGame() {
    let randomTab = Math.round(Math.random() * tableau.length);
    if (tableau[0]) {
        joueur2.innerHTML = 'cissor';
    }
}


cissor.addEventListener("click", function (){
    pcGame()
})

rock.addEventListener("click", function (){
    pcGame()
})

papper.addEventListener("click", function (){
    pcGame()
})