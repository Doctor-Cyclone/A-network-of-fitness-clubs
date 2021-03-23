'use strict';

import clubChoice from './modules/clubChoice';
import popup from './modules/popup';
import mainSlider from './modules/mainSlider';
import burgerMenu from './modules/burgerMenu';
import inputValidation from './modules/inputValidation';
import showArrowAfterScroll from './modules/showArrowAfterScroll';
import sendForm from './modules/sendForm';

clubChoice();
popup();
mainSlider();
burgerMenu();
showArrowAfterScroll();
inputValidation();

sendForm('banner-form');
sendForm('card_order');
sendForm('footer_form');
sendForm('form1');
sendForm('form2');