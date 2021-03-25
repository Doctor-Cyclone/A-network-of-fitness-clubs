const sliderMain = () => {
    const slider = document.querySelector('.main-slider'),
        slideText = slider.querySelectorAll('.slide-text'),
        slide = slider.querySelectorAll('.slide');

    let currentSlide = 0, interval;

    const prevSlide = (item, index) => {
        item[index].style.display = 'none';
        },
        nextSlide = (item, index) => {
            item[index].style.display = 'block';
        },
        autoPlaySlide = () => {
            prevSlide(slide, currentSlide);

            currentSlide++;

            if(currentSlide >= slide.length){
                currentSlide = 0;
            }

            nextSlide(slide, currentSlide);
        },
        startSlide = (time = 2000) => {
            interval = setInterval(autoPlaySlide, time);
        },
        stopSlide = () => {
            clearInterval(interval);
        };
    
    slideText.forEach( item => {
        item.addEventListener('mouseover', () => {
            stopSlide();
        });
        item.addEventListener('mouseout', () => {
            startSlide(2000);
        }); 
    });   

    startSlide(2000);
};

export default sliderMain;