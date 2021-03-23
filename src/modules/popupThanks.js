const popupThanks = () => {
    const thanksForm = document.getElementById('thanks');

    thanksForm.addEventListener('click', event => {
        const target = event.target;

        if(target.closest('.close_icon') || target.closest('.close-btn') || target.closest('.overlay')){
            thanksForm.style.display = 'none';
        }
    });
};

export default popupThanks;