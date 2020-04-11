const spnText = document.querySelector('.text');
const txt = 'Lorem ipsum dolor';



let index = 0;

const showLetter = () => {
    spnText.textContent += txt[index];
    index++;
    if (index === txt.length) clearInterval(Typing);

}

const Typing = setInterval(showLetter, 10)


// const showLetter = () => {
//     x = txt.length;
//     for (i = 0; i < 5; i++) {
//         i = 0;
//         i++;
//         console.log("test");
//         spnText.textContent += txt[i];
//     }
// }
// const Typing = setInterval(showLetter, 40)