const closePopup = (target) => {
    const freeVisitForm = document.getElementById('free_visit_form'),
        callbackForm = document.getElementById('callback_form'),
        giftForm = document.getElementById('gift');

    freeVisitForm.style.display = 'none';
    callbackForm.style.display = 'none';
    giftForm.style.display = 'none';
};

export default closePopup;