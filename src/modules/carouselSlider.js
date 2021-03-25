const carouselSlider = () => {
    const slider = document.querySelector('.services-slider'),
        sliderContainer = slider.querySelector('.services-slider-container'),
        slide = slider.querySelector('slide');

    let offset = 0;


    slider.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;

        

        if(target.matches('.next')){
            offset += 226;
            if(offset > 1130){
                offset = 0;
            }
            sliderContainer.style.left = -offset + 'px';
        } else if(target.matches('.prev')){
            offset -= 226;
            if(offset < 0){
                offset = 1130;
            }
            sliderContainer.style.left = -offset + 'px';
        }

    });
};

export default carouselSlider;