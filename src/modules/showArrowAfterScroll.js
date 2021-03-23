const showArrowAfterScroll = () => {
    const toTop = document.getElementById('totop');

    toTop.style.display = 'none';

    toTop.addEventListener('click', () => {
        window.scrollTo(0, 0);
        toTop.style.display = 'none';
    });
    window.onscroll = () => {
        if (document.documentElement.scrollTop >= 700){
            toTop.style.display = 'block';
        } else {
            toTop.style.display = 'none';
        }
    };
};

export default showArrowAfterScroll;