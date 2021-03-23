const calculator = () => {
    const promoСode = document.querySelector('[name = "promoСode"]'),
        priceTotal = document.getElementById('price-total'),
        times = document.querySelectorAll('[name = "card-type"]'),
		cardOrder = document.getElementById('card_order'),
        clubs = document.querySelectorAll('#card_order [name = "club-name"]');

	const countSum = () => {
		let total = 0;

        
	};
	priceTotal.innerHTML = 0;
	cardOrder.addEventListener('change', event => {
        const target = event.target;
		
		clubs.forEach( item => {
			if(item.checked){
				if(item.value === 'mozaika'){
					times.forEach( item => {
						if(item.checked){
							switch(item.value){
								case '1': 
									priceTotal.innerHTML = 1999;
									break;
								case '6': 
									priceTotal.innerHTML = 9900;
									break;
								case '9': 
									priceTotal.innerHTML = 13900;
									break;
								case '12': 
									priceTotal.innerHTML = 19900;
									break;	
							}
						}
					});
				} else {
					times.forEach( item => {
						if(item.checked){
							switch(item.value){
								case '1': 
									priceTotal.innerHTML = 2999;
									break;
								case '6': 
									priceTotal.innerHTML = 14990;
									break;
								case '9': 
									priceTotal.innerHTML = 21990;
									break;
								case '12': 
									priceTotal.innerHTML = 24990;
									break;	
							}
						}
					});
				}
				
			}
		});

		times.forEach( item => {
			if(target === item){
				countSum();
			}
		});	
    });    
};

export default calculator;