// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

game = {
    playerHand: "",
    aiHand: "",
}
summary = {
    wins: 0,
    draws: 0,
    losses: 0,
    games: 0,
}

const btnStart = document.querySelector("button.start");
const choices = [...document.querySelectorAll('img')];


choices.forEach(choice => choice.addEventListener("click", handSelection))

// wybór dłoni
function handSelection() {
    game.playerHand = this.dataset.option;
    choices.forEach(choice => choice.style.boxShadow = "");
    console.log(game.playerHand);
    this.style.boxShadow = "0 0 0 4px yellow";
    return game.playerHand;
}
// wybór komputera

function aiChoice() {
    indexAi = Math.floor(Math.random() * 3);
    console.log(indexAi);
    game.aiHand = choices[indexAi].dataset.option;
    return game.aiHand;
}

function compare(player, ai) {
    if (player == ai) {
        console.log("remis");
        return "remis";
    } else if (player == "kamień" && ai == "nożyczki" || player == "nożyczki" && ai == "papier" || player == "papier" && ai == "kamień") {
        console.log("wygrana");
        return "wygrana";
    } else {
        console.log("przegrana");
        return "przegrana";
    }

}

// function showChoice() {
//     document.querySelector('span.your-choice').textContent = game.playerHand;
//     document.querySelector('span.your-choice').textContent = game.playerHand;
// }

function showScores(player, ai, result) {
    document.querySelector("[data-summary= 'your-choice']").textContent = player;
    document.querySelector("[data-summary= 'ai-choice']").textContent = ai;
    summary.games += 1;

    document.querySelector("p.numbers span").textContent = `${summary.games}`;
    if (result == "remis") {
        summary.draws += 1;
        document.querySelector("p.draws span").textContent = `${summary.draws}`;
        document.querySelector("[data-summary= 'who-win']").textContent = "REMIS";
    } else if (result == "wygrana") {
        summary.wins += 1;
        document.querySelector("p.wins span").textContent = `${summary.wins}`
        document.querySelector("[data-summary= 'who-win']").textContent = "Ty :)";
    } else if (result == "przegrana") {
        summary.losses += 1;
        document.querySelector("p.losses span").textContent = `${summary.losses}`
        document.querySelector("[data-summary= 'who-win']").textContent = "Komputer :(";
    }

}

function runGame() {
    if (game.playerHand === "") {
        return alert("Wybierz dłoń");
    } else {
        game.aiHand = aiChoice();
        compare(game.playerHand, game.aiHand);
        const Result = compare(game.playerHand, game.aiHand);

        showScores(game.playerHand, game.aiHand, Result);
        game.playerHand = "";
    }
}

btnStart.addEventListener("click", runGame);