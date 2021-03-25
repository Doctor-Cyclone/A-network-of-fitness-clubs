const gallerySlider = () => {
    const slider = document.querySelector('.gallery-slider'),
    slide = slider.querySelectorAll('.slide'),
    dotBox = document.querySelector('.slider-dots'),
    array = [];

    let currentSlide = 0, interval;

    const dotAdd = () => {
        for(let i = 0; i < slide.length; i++){
            const dotContainer = document.createElement('li'),
                dotItem = document.createElement('button');

            dotContainer.classList.add('dot');
            dotItem.classList.add('dot-btn');

            array.push(dotContainer);

            dotContainer.append(dotItem);
            dotBox.append(dotContainer);
        }
    };

    dotAdd();
    array[0].classList.add('slick-active');

    const dot = slider.querySelectorAll('.dot'),
        prevSlide = (item, index, strClass) => {
            item[index].classList.remove(strClass);
        },
        nextSlide = (item, index, strClass) => {
            item[index].classList.add(strClass);
        },
        autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'slide-active');
            prevSlide(dot, currentSlide, 'slick-active');

            currentSlide++;

            if(currentSlide >= slide.length){
                currentSlide = 0;
            }

            nextSlide(slide, currentSlide, 'slide-active');
            nextSlide(dot, currentSlide, 'slick-active');
        },
        startSlide = (time = 2000) => {
            interval = setInterval(autoPlaySlide, time);
        },
        stopSlide = () => {
            clearInterval(interval);
        };

    slider.addEventListener('click', event => {
        event.preventDefault();

        const target = event.target;

        if(!target.matches('.arrow-btn, .dot')){
            return;
        }

        prevSlide(slide, currentSlide, 'slide-active');
        prevSlide(dot, currentSlide, 'slick-active');

        if(target.matches('.next')){
            currentSlide++;
        } else if(target.matches('.prev')){
            currentSlide--;
        } else if(target.matches('.dot')){
            console.log(target);
            dot.forEach((item, index) => {
                if(item === target){
                    currentSlide = index;
                }
            });
        }

        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        if(currentSlide < 0){
            currentSlide = slide.length - 1;
        }

        nextSlide(slide, currentSlide, 'slide-active');
        nextSlide(dot, currentSlide, 'slick-active');
    });

    slider.addEventListener('mouseover', (event) => {
        if(event.target.matches('.arrow-btn') || event.target.matches('.dot')){
            stopSlide();
        }
    });
    slider.addEventListener('mouseout', (event) => {
        if(event.target.matches('.arrow-btn') || event.target.matches('.dot')){
            startSlide(3000);
        }
    });

    startSlide(3000);
    };

export default gallerySlider;