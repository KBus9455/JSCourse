const btnAdd = document.querySelector(".add");
const btnClean = document.querySelector(".clean");
const btnAdvice = document.querySelector(".showAdvice");
const btnOptions = document.querySelector(".showOptions");
const input = document.querySelector('input')
const Advices = ["Walcz", "przemyś to jeszcze raz"];



const addAdvice = (e) => {
    e.preventDefault();
    let inputText = input.value;
    console.log(inputText);
    Advices.push(inputText);
    input.value = "";
}
const clearArray = (e) => {
    e.preventDefault();
    let Adviceslength = Array.length;
    Advices.splice(0, Adviceslength);
}

const showAdvice = (e) => {
    e.preventDefault();
    choseElement = Advices[Math.floor(Math.random() * Advices.length)];
    console.log(choseElement);

}
const showOptions = (e) => {
    e.preventDefault();
    alert(Advices);

}


btnAdd.addEventListener('click', addAdvice);
btnClean.addEventListener('click', clearArray);
btnAdvice.addEventListener('click', showAdvice);
btnOptions.addEventListener('click', showOptions);