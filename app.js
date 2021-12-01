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

let victory = document.getElementById('victory');

i=1;

//à modifier
function pcGame() {
    let randomTab = Math.floor(Math.random() * tableau.length);

    player2 = randomTab
    joueur2.innerHTML = tableau[randomTab];
    joueur2.style.fontSize = '4em';
    joueur2.style.color = 'red';

    joueur1.style.fontSize = '4em';
    joueur1.style.color = '#0083a1';


}


cissor.addEventListener("click", function () {
    joueur1.innerHTML = '<i class="far fa-hand-scissors"></i>';
    pcGame()

    if (joueur2.innerHTML === '<i class="far fa-hand-scissors"></i>') {
        result.innerHTML = 'Egalité';
        result.style.color = 'orange';
    }

    if (joueur2.innerHTML === '<i class="far fa-hand-paper"></i>') {
        result.innerHTML = 'Gagné';
        result.style.color = '#00fa0b';

        if (result.innerHTML === 'Gagné') {
            while (i<3) {
                let calcul = i + 1;
                i++
                console.log(calcul);
                //Créer une boucle calcul (regarder dans le cours les tableaux)
            }
        }

    }
    if (joueur2.innerHTML === '<i class="far fa-hand-rock"></i>') {
        result.innerHTML = 'perdu';
        result.style.color = 'red';
    }

})


rock.addEventListener("click", function () {
    joueur1.innerHTML = '<i class="far fa-hand-rock"></i>';
    pcGame()
    if (joueur2.innerHTML === '<i class="far fa-hand-rock"></i>') {
        result.innerHTML = 'Egalité';
        result.style.color = 'orange';

    }
    if (joueur2.innerHTML === '<i class="far fa-hand-scissors"></i>') {
        result.innerHTML = 'Gagné';
        result.style.color = '#00fa0b';

    }
    if (joueur2.innerHTML === '<i class="far fa-hand-paper"></i>') {
        result.innerHTML = 'perdu';
        result.style.color = 'red';

    }
})

papper.addEventListener("click", function () {
    joueur1.innerHTML = '<i class="far fa-hand-paper"></i>';
    pcGame()
    if (joueur2.innerHTML === '<i class="far fa-hand-scissors"></i>') {
        result.innerHTML = 'perdu';
        result.style.color = 'red';

    }
    if (joueur2.innerHTML === '<i class="far fa-hand-rock"></i>') {
        result.innerHTML = 'Gagné';
        result.style.color = '#00fa0b';

    }
    if (joueur2.innerHTML === '<i class="far fa-hand-paper"></i>') {
        result.innerHTML = 'Egalité';
        result.style.color = 'orange';

    }
})