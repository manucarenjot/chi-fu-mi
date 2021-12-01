let joueur1 = document.getElementById('joueur1');
let joueur2 = document.getElementById('joueur2');

let win = document.getElementById('win');

let cissor = document.getElementById('cissor');
let rock = document.getElementById('rock');
let papper = document.getElementById('papper');
let result = document.getElementById('resultat');

let ciseaux = '<i class="far fa-hand-scissors"></i>';
let papier = '<i class="far fa-hand-paper"></i>';
let pierre = '<i class="far fa-hand-rock"></i>';

let player2 = '';

let tableau = [ciseaux, papier, pierre];

let victory = document.getElementById('victory');
let defeat = document.getElementById('defeat');

pointVictory=1;
pointDefeat=1;

//à modifier
function pcGame() {
    let randomTab = Math.floor(Math.random() * tableau.length);

    player2 = randomTab
    joueur2.innerHTML = tableau[randomTab];
    joueur2.style.color = 'red';

    joueur1.style.color = '#0083a1';

}

function point(){
    if (pointVictory === 8){
        win.innerHTML = '<h1>vous avez gagné</h1>';
        win.style.color = '#00fa0b';
        win.style.display = 'inline';
        pointVictory = 1;
        pointDefeat = 1;
        victory.innerHTML = 'victoire : ';
        defeat.innerHTML = 'Defaites : ';
    }

    if (pointDefeat === 8){
        win.innerHTML = '<h1>vous avez perdu</h1>';
        win.style.color = 'red';
        win.style.display = 'inline';
         pointVictory = 1;
         pointDefeat = 1;
        victory.innerHTML = 'victoire : ';
        defeat.innerHTML = 'Defaites : ';

    }
}


cissor.addEventListener("click", function () {
    joueur1.innerHTML = '<i class="far fa-hand-scissors"></i>';
    pcGame()
    for(let i = 0 ; i < 1 ; i++) {
        if (joueur2.innerHTML === '<i class="far fa-hand-scissors"></i>') {
            result.innerHTML = 'Egalité';
            result.style.color = 'orange';
        }

        if (joueur2.innerHTML === '<i class="far fa-hand-paper"></i>') {
            result.innerHTML = 'Gagné';
            result.style.color = '#00fa0b';
            victory.innerHTML = 'victoire : ' + pointVictory++;
        }


        if (joueur2.innerHTML === '<i class="far fa-hand-rock"></i>') {
            result.innerHTML = 'perdu';
            result.style.color = 'red';
            defeat.innerHTML = 'Defaites : ' + pointDefeat++

        }
        point()
    }
})


rock.addEventListener("click", function () {
    joueur1.innerHTML = '<i class="far fa-hand-rock"></i>';
    pcGame()
    for(let i = 0 ; i < 1 ; i++) {
        if (joueur2.innerHTML === '<i class="far fa-hand-rock"></i>') {
            result.innerHTML = 'Egalité';
            result.style.color = 'orange';

        }
        if (joueur2.innerHTML === '<i class="far fa-hand-scissors"></i>') {
            result.innerHTML = 'Gagné';
            result.style.color = '#00fa0b';
            victory.innerHTML = 'victoire : ' + pointVictory++;

        }
        if (joueur2.innerHTML === '<i class="far fa-hand-paper"></i>') {
            result.innerHTML = 'perdu';
            result.style.color = 'red';
            defeat.innerHTML = 'Defaites : ' + pointDefeat++
        }
        point()
    }
})

papper.addEventListener("click", function () {
    joueur1.innerHTML = '<i class="far fa-hand-paper"></i>';
    pcGame()
    for(let i = 0 ; i < 1 ; i++) {
    if (joueur2.innerHTML === '<i class="far fa-hand-scissors"></i>') {
        result.innerHTML = 'perdu';
        result.style.color = 'red';
        defeat.innerHTML = 'Defaites : ' + pointDefeat++
    }
    if (joueur2.innerHTML === '<i class="far fa-hand-rock"></i>') {
        result.innerHTML = 'Gagné';
        result.style.color = '#00fa0b';
        victory.innerHTML = 'victoire : ' + pointVictory++;
    }
    if (joueur2.innerHTML === '<i class="far fa-hand-paper"></i>') {
        result.innerHTML = 'Egalité';
        result.style.color = 'orange';

    }
    point()
}
})