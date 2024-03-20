/*Фото работ врача, До-После / Слайдер, галерея*/
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const slider = document.querySelector(".slider");
const slides = document.getElementsByClassName("slide");
let currentSlide = 0;

function showSlide(index) {
for (let slide of slides) {
    slide.style.display = "none";
}
slides[index].style.display = "block";
}

function goToNextSlide() {
currentSlide = (currentSlide + 1) % slides.length;
showSlide(currentSlide);
}

function goToPrevSlide() {
currentSlide = (currentSlide - 1 + slides.length) % slides.length;
showSlide(currentSlide);
}

prevButton.addEventListener("click", goToPrevSlide);
nextButton.addEventListener("click", goToNextSlide);

showSlide(currentSlide);
/*Слайдер Сертификаты*/

/*Слайдер Отзывы*/
const sliderElm = document.querySelector(".slider-container .slider");
const btnLeft = document.querySelector(".slider-container .btn-left");
const btnRight = document.querySelector(".slider-container .btn-right");

const numberSliderBoxs = sliderElm.children.length;
let idxCurrentSlide = 0;

// Functions:
function moveSlider() {
let leftMargin =
    (sliderElm.clientWidth / numberSliderBoxs) * idxCurrentSlide;
sliderElm.style.marginLeft = -leftMargin + "px";
console.log(sliderElm.clientWidth, leftMargin);
}
function moveLeft() {
if (idxCurrentSlide === 0) idxCurrentSlide = numberSliderBoxs - 1;
else idxCurrentSlide--;

moveSlider();
}
function moveRight() {
if (idxCurrentSlide === numberSliderBoxs - 1) idxCurrentSlide = 0;
else idxCurrentSlide++;

moveSlider();
}

// Event Listeners:
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
window.addEventListener("resize", moveSlider);
/*Слайдер Отзывы*/