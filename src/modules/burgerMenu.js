const burgerMenu = () => {
    const popupMenu = document.querySelector('.popup-menu');

    const menuOpenClose = () => {
        if(popupMenu.style.display === 'block'){
            popupMenu.style.display = 'none';
        } else {
            popupMenu.style.display = 'block';
        }
    };

    window.addEventListener('click', event => {
        const target = event.target;

        if(target.closest('.menu-button')){
            menuOpenClose();
        } else if(target.closest('.close-menu-btn') || target.tagName === 'A'){
            menuOpenClose();
        }
    });
};

export default burgerMenu;