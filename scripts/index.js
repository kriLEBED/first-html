

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

            if (window.matchMedia('(min-width: 990px)').matches) {
                const fourthSlidesIndex = thirdSlidesIndex + 1 >= slide.length ? 0 : thirdSlidesIndexSlidesIndex + 1;
                slidesContainer.innerHTML += slide[fourthSlidesIndex];

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