const burgerMenu = () => {
    const popupMenu = document.querySelector('.popup-menu'),
        menuBtn = document.querySelector('.menu-button'),
        menu = document.querySelector('.top-menu'),
        head = document.querySelector('.head'),
        headHeight = head.clientHeight,
        menuBtnDisplay = window.getComputedStyle(menuBtn).display;

//Фиксация БУРГЕР-меню при скролле
    const fixedMenuFunc = () => {
        const fixedMenu = () => {
            if(window.scrollY > headHeight){
                menu.classList.add('fixed-menu');
            } else {
                menu.classList.remove('fixed-menu');
            }     
        };
    
        window.onscroll = () => {
            if(menuBtnDisplay === 'block'){
                fixedMenu();
            }
        };
    
        window.addEventListener('resize', () => {
            const menuBtnDisplay = window.getComputedStyle(menuBtn).display;
    
            if(menuBtnDisplay === 'block'){
                window.onscroll = () => {
                    fixedMenu();
                };
            } else {
                window.onscroll = () => {
                    menu.classList.remove('fixed-menu');
                };
            }
        });
    
        fixedMenu();
    };
    fixedMenuFunc();
    
//Проверка ОТКРЫТО или ЗАКРЫТО меню
    const menuOpenClose = () => {
        if(popupMenu.style.display === 'block'){
            popupMenu.style.display = 'none';
        } else {
            popupMenu.style.display = 'block';
        }
    };

    menuBtn.addEventListener('click', menuOpenClose);
    popupMenu.addEventListener('click', event => {
        const target = event.target;
        if(target.closest('.close-menu-btn') || target.tagName === 'A'){
            menuOpenClose();
        }
    });
};

export default burgerMenu;