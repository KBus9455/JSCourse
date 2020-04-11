// http://websamuraj.pl/examples/js/projekt11/

const btnStart = document.querySelector('button.main');
const btnReset = document.querySelector('button.reset');
const screen = document.querySelector('div.time div')


let active = false;
let time = 0;
let indexInerva;

const countTime = () => {
    if (!active) {
        active = !active;
        btnStart.textContent = "Pauza";
        indexInerval = setInterval(start, 10);
    } else {
        active = !active;
        clearInterval(indexInerval);
        btnStart.textContent = "Start";

    }
}
const start = () => {
    time++;
    screen.textContent = (time / 100).toFixed(2);
}
const timeReset = () => {
    active = !active;
    clearInterval(indexInerval);
    time = 0;
    screen.textContent = "---";
    btnStart.textContent = "Start";
}

btnStart.addEventListener('click', countTime)
btnReset.addEventListener('click', timeReset)