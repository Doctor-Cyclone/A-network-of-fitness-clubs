import closePopup from './closePopup';
import popupThanks from './popupThanks';
popupThanks();
const sendForm = (id) => {
    const errorMessage = `<h4>Упс!</h4>
                        <p>Что-то пошло не так. <br> Ваша заявка не отправлена.</p>
                        <button class="btn close-btn">OK</button>`,
        successMessage = `<h4>Спасибо!</h4>
                        <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>
                        <button class="btn close-btn">OK</button>`,
        loadMessage = 'Загрузка...',
        statusMessage = document.createElement('div'),

        form = document.getElementById(id),
        useOfPersonalData = form.querySelector('input[type=checkbox]'),
        clubs = form.querySelectorAll('[name = "club-name"]'),
        cardType = form.querySelectorAll('[name = "card-type"]'),
        priceTotal = document.getElementById('price-total'),
        formInputs = form.querySelectorAll('input'),

        inputName = form.querySelectorAll('[name = "name"]'),
        inputPhone = form.querySelectorAll('[name = "phone"]'),
        
        sendBtn = form.querySelector('button'),

        thanks = document.getElementById('thanks'),
        thanksFormContent = thanks.querySelector('.form-content');

        statusMessage.style.color = '#FFD11A';
        statusMessage.style.textAlign = 'center';
        statusMessage.style.fontSize = '20px';

    //Очистка полей
    const clearInputAfterSubmit = () => {
        //Очистка input после отправки данных
        formInputs.forEach( item => {
            item.value = '';
        });
        //Очистка radio-button с выбором клуба
        if(clubs){
            clubs.forEach( item => {
                item.checked = false;
            });
        }
        //Очистка radio-button с выбором месяцев
        if(cardType){
            cardType.forEach( item => {
                item.checked = false;
            });
        }
        //Очистка итоговой цены
        priceTotal.innerHTML = 0;
        //Очистка чекбокса с обработкой персональных данных
        if(useOfPersonalData){
            useOfPersonalData.checked = false;
        }
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if(useOfPersonalData.checked){
            form.appendChild(statusMessage);
            statusMessage.innerHTML = loadMessage;
            
            const formData = new FormData(form);
    
            let body = {};
            formData.forEach( (value, key) => {
                body[key] = value;
            });
    
            postData(body)
                .then((response) => {
                    if(response.status !== 200){
                        throw new Error('status network not 200');
                    }
    
                    thanks.style.display = 'block';
                    thanksFormContent.innerHTML = successMessage;
                    statusMessage.textContent = '';
    
                    clearInputAfterSubmit();
    
                    setTimeout(() => {
                        closePopup();
                        thanks.style.display = 'none';
                    }, 2000);
                    
                })
                .catch((error) => {
                    console.log(error);
    
                    thanks.style.display = 'block';
                    thanksFormContent.innerHTML = errorMessage;
                    statusMessage.textContent = '';
    
                    clearInputAfterSubmit();
                });
        } else {
            console.log(form);
            form.setCustomValidity('ыапвыафп');
        }       
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    };
};

export default sendForm;