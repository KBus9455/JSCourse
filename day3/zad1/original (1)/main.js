const btn = document.querySelector("button");
const list = document.querySelectorAll("li");
console.log(list);
let size = 10;
// btn.addEventListener('click', function () {


//     for (let i = 0; i < list.length; i++) {
//         list[i].style.display = 'block';
//         list[i].style.fontSize = size + "px";
//     }
//     size++;
// })

btn.addEventListener('click', () => {
    size++;
    list.forEach((liItem) => {
        liItem.style.display = 'block';
        liItem.style.fontSize = size + "px";
    })
})