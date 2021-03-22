const popup = () => {
    const freeVisitForm = document.getElementById('free_visit_form'),
        callbackForm = document.getElementById('callback_form');

    const closePopup = (target) => {
        if(target.closest('#free_visit_form')){
            freeVisitForm.style.display = 'none';
        } else {
            callbackForm.style.display = 'none';
        }
    };

    window.addEventListener('click', event => {
        const target = event.target;

        if(target.classList.contains('open-popup')){
            freeVisitForm.style.display = 'block';
        } else if(target.classList.contains('callback-btn')){
            callbackForm.style.display = 'block';
        } else if(target.closest('.close-form')){
            closePopup(target);
        } else if(target.closest('.overlay')){
            closePopup(target);
        }
    });
};

export default popup;