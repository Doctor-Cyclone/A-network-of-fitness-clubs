'use strict';

import clubChoice from './modules/clubChoice';
import popup from './modules/popup';

import sliderMain from './modules/sliderMain';
import sliderGallery from './modules/sliderGallery';
import sliderCarouse from './modules/sliderCarouse';

import burgerMenu from './modules/burgerMenu';
import inputValidation from './modules/inputValidation';
import showArrowAfterScroll from './modules/showArrowAfterScroll';
import sendForm from './modules/sendForm';
import calculator from './modules/calculator.js';


clubChoice();
popup();

sliderMain();
sliderGallery();
sliderCarouse();

burgerMenu();
showArrowAfterScroll();
inputValidation();


if(document.querySelector('.price')){
    calculator();
}


sendForm('banner-form');
sendForm('card_order');
sendForm('footer_form');
sendForm('form1');
sendForm('form2');