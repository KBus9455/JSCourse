/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  console.log(e.keyCode);

  switch (e.keyCode) {
    case 87:
      document.body.style.backgroundColor = `rgb(${red<=255 ? red++ : red}, ${green<=255 ? green++ : green}, ${blue<=255 ? blue++ : blue})`;
      break;

    case 83:
      document.body.style.backgroundColor = `rgb(${red>0 ? red-- : red}, ${green>0 ? green-- : green}, ${blue>0 ? blue-- : blue})`;
      break;
  }
}
// if (e.keyCode === 87) {
//   if (red < 255) {
//     red++;
//     green++;
//     blue++;
//   }
// } else if (e.keyCode === 83) {
//   if (red >0 ) {
//   red--;
//   green--;
//   blue--;
// }

// document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// console.log(red, green, blue);
// 38 - strzałka do góry  W-87 S-83
// 40 - strzalka w dół

// wciśnięcie klawisza strzałki do góry ma zmieniać kolor (stopniowo) na biały czyli rgb(255,255,255). Wciśniecie klawisza strzałki w dół ma zmienić kolor stopniowo na czarny (docelowo rgb(0,0,0)) 
//tutaj twój kod
// wersja 1 - instrukcja if
// wersja 2 - instrukcja switch



window.addEventListener('keydown', changeColor)