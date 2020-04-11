const slideList = [{
        img: "images/img1.jpg",
        text: "Pierwszy obrazek"
    },
    {
        img: "images/img2.jpg",
        text: "Drugi obrazek"
    }, {
        img: "images/img3.jpg",
        text: "Trzeci obrazek"
    }
];
const dots = [...document.querySelectorAll('span')];
time = 1000;
let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}


const changeSlide = () => {
    active++;
    if (active >= slideList.length) {
        active = 0;
    }
    document.querySelector('img.slider').src = slideList[active].img;
    document.querySelector('h1').textContent = slideList[active].text;
    changeDot();
};

setInterval(changeSlide, time)

const keyChangeSlide = (e) => {

    if (e.keyCode === 65) { //a
        active++
    }

    if (e.keyCode === 68) { //d
        active--
    }

}
document.addEventListener("keydown", keyChangeSlide)