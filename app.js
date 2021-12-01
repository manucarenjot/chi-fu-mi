let joueur1 = document.getElementById('joueur1');
let joueur2 = document.getElementById('joueur2');


let cissor = document.getElementById('cissor');
let rock = document.getElementById('rock');
let papper = document.getElementById('papper');
let result = document.getElementById('resultat');

let ciseaux = '<i class="far fa-hand-scissors"></i>';
let papier = '<i class="far fa-hand-paper"></i>';
let pierre = '<i class="far fa-hand-rock"></i>';

let player2 = '';

let tableau = [ciseaux, papier, pierre];


//à modifier
function pcGame() {
    let randomTab = Math.floor(Math.random() * tableau.length);

    console.log(randomTab)
    player2 = randomTab
    console.log(player2)
        joueur2.innerHTML = tableau[randomTab];




}


cissor.addEventListener("click", function (){
    joueur1.innerHTML = '<i class="far fa-hand-scissors"></i>';
    pcGame()
    if (joueur2.innerHTML === '<i class="far fa-hand-scissors"></i>'){
        result.innerHTML = 'Egalité';
        result.style.color = 'orange';
    }
    if (joueur2.innerHTML === '<i class="far fa-hand-paper"></i>'){
        result.innerHTML = 'Gagné';
        result.style.color = '#00fa0b';
    }
    if (joueur2.innerHTML === '<i class="far fa-hand-rock"></i>'){
        result.innerHTML = 'perdu';
        result.style.color = 'red';
    }
})

rock.addEventListener("click", function (){
    joueur1.innerHTML = '<i class="far fa-hand-rock"></i>';
    pcGame()
    if (joueur2.innerHTML === '<i class="far fa-hand-rock"></i>'){
        result.innerHTML = 'Egalité';
        result.style.color = 'orange';
    }
    if (joueur2.innerHTML === '<i class="far fa-hand-scissors"></i>'){
        result.innerHTML = 'Gagné';
        result.style.color = '#00fa0b';
    }
    if (joueur2.innerHTML === '<i class="far fa-hand-paper"></i>'){
        result.innerHTML = 'perdu';
        result.style.color = 'red';
    }
})

papper.addEventListener("click", function (){
    joueur1.innerHTML = '<i class="far fa-hand-paper"></i>';
    pcGame()
    if (joueur2.innerHTML === '<i class="far fa-hand-scissors"></i>'){
        result.innerHTML = 'perdu';
        result.style.color = 'red';
    }
    if (joueur2.innerHTML === '<i class="far fa-hand-rock"></i>'){
        result.innerHTML = 'Gagné';
        result.style.color = '#00fa0b';
    }
    if (joueur2.innerHTML === '<i class="far fa-hand-paper"></i>'){
        result.innerHTML = 'Egalité';
        result.style.color = 'orange';
        joueur2.style.fontSize = '2em';
    }
})