let joueur1 = document.getElementById('joueur1');
let joueur2 = document.getElementById('joueur2');


let cissor = document.getElementById('cissor');
let rock = document.getElementById('rock');
let papper = document.getElementById('papper');

let ciseaux = 'ciseaux';
let papier = 'papier';
let pierre = 'pierre';

let player2 = '';

let tableau = [ciseaux, papier, pierre];


//à modifier
function pcGame() {
    let randomTab = Math.round(Math.random() * tableau.length);

    console.log(randomTab)
    player2 = randomTab
    console.log(player2)
        joueur2.innerHTML = tableau[randomTab];




}


cissor.addEventListener("click", function (){
    joueur1.innerHTML = 'ciseaux';
    pcGame()
    if (joueur2.innerHTML === 'ciseaux'){
        alert('Egalité');
    }
    if (joueur2.innerHTML === 'papier'){
        alert('Gagné');
    }
    if (joueur2.innerHTML === 'pierre'){
        alert('perdu');
    }
})

rock.addEventListener("click", function (){
    joueur1.innerHTML = 'pierre';
    pcGame()
    if (joueur2.innerHTML === 'ciseaux'){
        alert('Gagné');
    }
    if (joueur2.innerHTML === 'pierre'){
        alert('egalité');
    }
    if (joueur2.innerHTML === 'papier'){
        alert('perdu');
    }
})

papper.addEventListener("click", function (){
    joueur1.innerHTML = 'papier';
    pcGame()
    if (joueur2.innerHTML === 'ciseaux'){
        alert('perdu');
    }
})