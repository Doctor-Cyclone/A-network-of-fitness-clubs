'use strict';

import clubChoice from './modules/clubChoice';
import popup from './modules/popup';
import mainSlider from './modules/mainSlider';
import burgerMenu from './modules/burgerMenu';

clubChoice();
popup();
mainSlider();
burgerMenu();

const showArrowAfterScroll = () => {
    const toTop = document.getElementById('totop');

    toTop.style.display = 'none';

    window.onscroll = () => {
        if (document.documentElement.scrollTop >= 700){
            toTop.style.display = 'block';
        } else {
            toTop.style.display = 'none';
        }
    };
};
showArrowAfterScroll();