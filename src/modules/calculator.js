const calculator = () => {
    const promoСode = document.querySelector('[name = "promoСode"]'),
        priceTotal = document.getElementById('price-total'),
        times = document.querySelectorAll('[name = "card-type"]'),
		cardOrder = document.getElementById('card_order'),
        clubs = document.querySelectorAll('#card_order [name = "club-name"]');

		priceTotal.innerHTML = 0;

		const getPrice = (htmlText, nameTimes) => {
			const parser = new DOMParser().parseFromString(htmlText, 'text/html'),
				cardsTypes = parser.querySelector('.cards-types'),
				timesValue = cardsTypes.querySelectorAll('[name = "card-type"]'),
				timesLabel = cardsTypes.querySelectorAll('label');
		
			timesValue.forEach( item => {
				if(item.value === nameTimes){
					timesLabel.forEach( label => {
						if(label.getAttribute('for') === item.getAttribute('id')){
							const cost = label.querySelector('.cost').textContent;
							let finalyCost = cost.substr(0, cost.length - 1);
							if(promoСode.value === 'ТЕЛО2020'){
								finalyCost -= Math.ceil((finalyCost / 100 * 30));
								priceTotal.innerHTML = finalyCost;
							} else {
								priceTotal.innerHTML = finalyCost;
							}
						}
					});
				}
			});
		};

		const mozaikaGetPriceRequest = (nameTimes) => {
			fetch('mozaika.html')
			.then( response => response.text())
			.then( htmlText => {
				getPrice(htmlText, nameTimes);
			});
		};

		const schelkovoGetPriceRequest = (nameTimes) => {
			fetch('schelkovo.html')
			.then( response => response.text())
			.then( htmlText => {
				getPrice(htmlText, nameTimes);
			});
		};

	cardOrder.addEventListener('change', event => {
        const target = event.target;
		
		clubs.forEach( item => {
			if(item.checked){
				if(item.value === 'mozaika'){
					times.forEach( item => {
						if(item.checked){
							mozaikaGetPriceRequest(item.value + 's');
						}
					});
				} else {
					times.forEach( item => {
						if(item.checked){
							schelkovoGetPriceRequest(item.value + 's');
						}
					});
				}
				
			}
		});	
    });    
};

export default calculator;