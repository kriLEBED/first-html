

/* section 8 Companies Carousel */

const slide = [
    '<div><img src="./img/companies logo/artvan.png" alt="artvan logo"></div>',
    '<div><img src="./img/companies logo/idea.png" alt="idea logo"></div>',
    '<div><img src="./img/companies logo/ikea.png" alt="ikea logo"></div>',
    '<div><img src="./img/companies logo/kronheims.png" alt="kronheims logo"></div>',
    '<div><img src="./img/companies logo/seamans.png" alt="seamans logo"></div>',
    '<div><img src="./img/companies logo/vitra.png" alt="vitra logo"></div>',
    '<div><img src="./img/companies logo/walmart.png" alt="walmart logo"></div>',
];

let currentSlideIdx = 0;

function renderCarousels() {
    const slidesContainer = document.querySelector('.companies-carousel__slides');
    slidesContainer.innerHTML = slide[currentSlideIdx];
    if (window.matchMedia('(min-width: 479px)').matches) {
        const secondSlidesIndex = currentSlideIdx + 1 >= slide.length ? 0 : currentSlideIdx + 1;
        slidesContainer.innerHTML += slide[secondSlidesIndex];

        if (window.matchMedia('(min-width: 767px)').matches) {
            const thirdSlidesIndex = secondSlidesIndex + 1 >= slide.length ? 0 : secondSlidesIndex + 1;
            slidesContainer.innerHTML += slide[thirdSlidesIndex];

            const fourthSlidesIndex = thirdSlidesIndex + 1 >= slide.length ? 0 : thirdSlidesIndex + 1;
            slidesContainer.innerHTML += slide[fourthSlidesIndex];

            if (window.matchMedia('(min-width: 990px)').matches) {
                const fiveSlidesIndex = fourthSlidesIndex + 1 >= slide.length ? 0 : fourthSlidesIndex + 1;
                slidesContainer.innerHTML += slide[fiveSlidesIndex];

                const sixSlidesIndex = fiveSlidesIndex + 1 >= slide.length ? 0 : fiveSlidesIndex + 1;
                slidesContainer.innerHTML += slide[sixSlidesIndex];
            }
        }
    }
}

function nextSlides () {
    currentSlideIdx = currentSlideIdx + 1 >= slide.length ? 0 : currentSlideIdx + 1;
    renderCarousels();
}

function prevSlides () {
    currentSlideIdx = currentSlideIdx - 1 < 0 ? slide.length - 1 : currentSlideIdx - 1;
    renderCarousels();
}

setInterval(nextSlides, 5000);
renderCarousels();

const nextButton = document.querySelector('.companies-carousel__btn-next');
nextButton.addEventListener('click', nextSlides);

const prevButton = document.querySelector('.companies-carousel__btn-prev');
prevButton.addEventListener('click', prevSlides);

/* section 10 our-customers-say */
const slides = [
    `<div class="our-customers-say__slide">
        <img src="./img/costumers/costumer 1.webp" alt="customer 1" class="our-customers-say__img">
        <p class="our-customers-say__name">Kyle Hudson</p>
        <p class="our-customers-say__country">Houston</p>
        <p class="our-customers-say__say">Thank you for helping me choose new armchairs in the living room. They look great and fit perfectly into my interior.</p>
        <p class="our-customers-say__date">June 13, 2024</p>
    </div>`,
    `<div class="our-customers-say__slide">
        <img src="./img/costumers/costumer 2.webp" alt="customer 2" class="our-customers-say__img">
        <p class="our-customers-say__name">Hanna Levy</p>
        <p class="our-customers-say__country">Boston</p>
        <p class="our-customers-say__say">Next-day delivery surprised me a lot! I thought I would have to wait for weeks! Thank you for the quick processing of my order!</p>
        <p class="our-customers-say__date">October 04, 2024</p>
    </div>`,
    `<div class="our-customers-say__slide">
        <img src="./img/costumers/costumer 3.webp" alt="customer 3" class="our-customers-say__img">
        <p class="our-customers-say__name">Jim Mockeen</p>
        <p class="our-customers-say__country">Chicago</p>
        <p class="our-customers-say__say">I not only found the perfect sofa at a reasonable price but also stylish lamps which were exactly what I wanted. Thank you, SOFA!</p>
        <p class="our-customers-say__date">January 18, 2024</p>
    </div>`,
    `<div class="our-customers-say__slide">
        <img src="./img/costumers/costumer 4.webp" alt="customer 4" class="our-customers-say__img">
        <p class="our-customers-say__name">Karen Morning</p>
        <p class="our-customers-say__country">Washington</p>
        <p class="our-customers-say__say">My order arrived really quickly and I was amazed by the quality - PERFECT. I would and have recommended SOFA to others.</p>
        <p class="our-customers-say__date">February 03, 2024</p>
    </div>`,
    `<div class="our-customers-say__slide">
        <img src="./img/costumers/costumer 5.webp" alt="customer 5" class="our-customers-say__img">
        <p class="our-customers-say__name">Judy Peterson</p>
        <p class="our-customers-say__country">New York</p>
        <p class="our-customers-say__say">I'm very pleased with our new sofa! It fits perfectly into the interior. The assemblage of the furniture was super fast!</p>
        <p class="our-customers-say__date">October 28, 2024</p>
    </div>`,
]

let currentSlideIndex = 0;

function renderCarousel() {
    const slideContainer = document.querySelector('.our-customers-say__slides');
    slideContainer.innerHTML = slides[currentSlideIndex];
    if (window.matchMedia('(min-width: 479px)').matches) {
        const secondSlideIndex = currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;
        slideContainer.innerHTML += slides[secondSlideIndex];

        if (window.matchMedia('(min-width: 767px)').matches) {
            const thirdSlideIndex = secondSlideIndex + 1 >= slides.length ? 0 : secondSlideIndex + 1;
            slideContainer.innerHTML += slides[thirdSlideIndex];
        }
    }
}

function nextSlide() {
    currentSlideIndex = currentSlideIndex + 1 >= slides.length ? 0 : currentSlideIndex + 1;
    renderCarousel();
}

function prevSlide() {
    currentSlideIndex = currentSlideIndex - 1 < 0 ? slides.length - 1 : currentSlideIndex - 1;
    renderCarousel();
}

renderCarousel();

const nextBtn = document.querySelector('.our-customers-say__btn-prev');
nextBtn.addEventListener('click', nextSlide);

const prevBtn = document.querySelector('.our-customers-say__btn-next');
prevBtn.addEventListener('click', prevSlide);