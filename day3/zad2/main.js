let orderElement = 1;
let size = 10;

const init = () => {
    const btn = document.createElement("button");
    const list = document.createElement("ul");
    document.body.appendChild(btn);
    document.body.appendChild(list);
    btn.textContent = "Dodaj 10 elementów listy";
    btn.addEventListener("click", createLiElements);
}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const liELements = document.createElement("li");
        document.querySelector("ul").appendChild(liELements);
        liELements.style.fontSize = size + "px";
        liELements.textContent = `Element nr${orderElement++}`;
        size++
    }



}


init()