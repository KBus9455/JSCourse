// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const gameSummary = {
    numbers: 0, // liczba gier 
    wins: 0,
    losses: 0,
    draws: 0
};

const game = {
    playerHand: "",
    aiHand: "",
}


const hands = [...document.querySelectorAll('.select img')];

// Wybór gracza

function handSelection() {
    game.playerHand = this.dataset.option;
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px yellow'
}
// Wybór komputera 
function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;

}

function checkResult(player, ai) {
    if (player === ai) {
        return "REMIS"
    } else if (player === "papier" && ai === "kamień") {
        return "TY";
    } else if (player === "papier" && ai === "nożyczki") {
        return "Komputer";
    } else if (player === "kamień" && ai === "papier") {
        return "Komputer";
    } else if (player === "kamień" && ai === "nożyczki") {
        return "TY";
    } else if (player === "nożyczki" && ai === "papier") {
        return "TY";
    } else if (player === "nożyczki" && ai === "kamień") {
        return "Komputer"
    }

}
// Publikacja wyniku
function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('[data-summary="who-win"]').textContent = result;
    document.querySelector("p.numbers span").textContent = ` ${++gameSummary.numbers}`

    if (result == "TY") {
        document.querySelector("p.wins span").textContent = ` ${++gameSummary.wins}`
    } else if (result == "Komputer") {
        document.querySelector("p.losses span").textContent = ` ${++gameSummary.losses}`
    } else {
        document.querySelector("p.draws span").textContent = ` ${++gameSummary.draws}`
    }
}

function cleaning() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
}
// Funkcja sterująca
function startGame() {
    if (!game.playerHand) {
        return alert('Wybierz dłoń') // ważne aby zakończyć działanie funkcji - return
    }
    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    console.log(gameResult);
    publishResult(game.playerHand, game.aiHand, gameResult);
    cleaning();
}

hands.forEach(hand => {
    hand.addEventListener('click', handSelection)
})
document.querySelector('.start').addEventListener('click', startGame)