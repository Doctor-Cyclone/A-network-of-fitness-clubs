const clubChoice = () => {
    const clubSelect = document.querySelector('.club-select'),
		x = clubSelect.querySelectorAll('clubs-list'),
        clubsList = clubSelect.querySelector('ul');

	window.addEventListener('click', (event) => {
		const target = event.target;

		if(target.closest('.clubs-list')){
			if(target.closest('.clubs-list > ul')){
				return;
			} else {
				if(clubsList.style.display === 'block'){
					clubsList.style.display = 'none';
				} else {
					clubsList.style.display = 'block';
				}
			}
		} else if(!target.closest('.club-select')){
			if(clubsList.style.display === 'block'){
				console.log(1);
				clubsList.style.display = 'none';
			}
		}
	});
};

export default clubChoice;