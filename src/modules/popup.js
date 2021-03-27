import closePopup from './closePopup';

const popup = () => {
    const freeVisitForm = document.getElementById('free_visit_form'),
        callbackForm = document.getElementById('callback_form'),
        giftForm = document.getElementById('gift'),
        fixedGift = document.querySelector('.fixed-gift');

    window.addEventListener('click', event => {
        const target = event.target;

        if(!target.hasAttribute('type')){
            if(target.classList.contains('open-popup')){
                freeVisitForm.style.display = 'block';
            } else if(target.classList.contains('callback-btn')){
                callbackForm.style.display = 'block';
            } else if(target.closest('.fixed-gift')){
                fixedGift.style.display = 'none';
                giftForm.style.display = 'block';
            } else if(target.closest('.close-form') || target.closest('.overlay') || target.closest('.close-btn')){
                closePopup();
            }
        }
        
    });
};

export default popup;