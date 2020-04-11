const x = () => {
    let time = 0;

    const counter = () => {
        time++
        console.log(`Jesteś na stronie ${time} sekund`)
        document.body.textContent = `Jesteś na stronie ${time} sekund`
    }
    return counter
}

const Licznik = x();
setInterval(Licznik, 1000)