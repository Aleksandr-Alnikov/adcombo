const slides = document.querySelectorAll('.hero__item');
const leftBtn = document.querySelector('.hero__left-btn');
const rightBtn = document.querySelector('.hero__right-btn');
let index = 1;


const showSlide = (i) => {
    const size = window.matchMedia('(max-width: 600px)');


    if (i > slides.length) {
        index = 1;
    }
    if (i < 1) {
        index = slides.length;
    }

    const handleSize = (e) => {
        slides.forEach(item => {
            if (e.matches) {
                item.style.display = 'none';
                slides[index - 1].style.display = '';
            } else {
                item.style.display = '';
            }
        });
    };

    size.addEventListener('change', handleSize);
    handleSize(size);
};

export const launchSlide = () => {

    const plusSlide = (i) => {
        showSlide(index += i);
    };

    leftBtn.addEventListener('click', () => {
        plusSlide(-1);
    });

    rightBtn.addEventListener('click', () => {
        plusSlide(1);
    });
};