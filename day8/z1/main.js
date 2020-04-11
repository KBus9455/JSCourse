const spnText = document.querySelector('.text');
const txt = 'Lorem ipsum dolor';




let index = 0;

const showLetter = () => {
    spnText.textContent += txt[index];
    index++;
    if (index === txt.length) clearInterval(Typing);

}

const Typing = setInterval(showLetter, 10)

// // Parametry
// let indexText = 0;
// const time = 40;

// // Implementacja
// const addLetter = () => {
//     spnText.textContent += txt[indexText];
//     indexText++;
//     if (indexText === txt.length) clearInterval(indexTyping);
// }
// const indexTyping = setInterval(addLetter, time);