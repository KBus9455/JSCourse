// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]
const div = document.querySelector("div");

const LCPasswords = passwords.map(password => {
    return password.toLowerCase();
})

const showMessage = (e) => {
    const inputText = e.target.value.toLowerCase();

    for (i = 0; i < LCPasswords.length; i++) {
        if (inputText == LCPasswords[i]) {
            div.textContent = messages[i];
        }
        if (inputText == "") {
            div.textContent = "";
        }
    }
}

// const showMessage = (e) => {
//     passwords.forEach((item, i) => {
//         if (item.toUpperCase() === e.target.value.toUpperCase())
//             div.textContent = messages[i];
//     })
// }
//tutaj rozwiązanie
// PS. nie skupiaj się na niczym innym w zadaniu niż porównanie i wyświetlenie ( nie rób czyszczenia inputa itp. nie są potrzebne, chyba że masz ochotę)


input.addEventListener("input", showMessage)