const popup = () => {
    const freeVisitForm = document.getElementById('free_visit_form'),
        callbackForm = document.getElementById('callback_form'),
        giftForm = document.getElementById('gift'),
        fixedGift = document.querySelector('.fixed-gift');

    const closePopup = (target) => {
        if(target.closest('#free_visit_form')){
            freeVisitForm.style.display = 'none';
        } else if(target.closest('#callback_form')) {
            callbackForm.style.display = 'none';
        } else {
            giftForm.style.display = 'none';
        }
    };

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
            } else if(target.closest('.close-form')){
                closePopup(target);
            } else if(target.closest('.overlay')){
                closePopup(target);
            } else if(target.closest('.close-btn')){
                closePopup(target);
            }
        }
        
    });
};

export default popup;