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

        useOfPersonalData = form.querySelector('[type = "checkbox"]'),
        personalData = form.querySelector('.personal-data'),

        clubs = form.querySelector('.club'),
        clubMozaika = form.querySelector('[value = "mozaika"]'),
        clibSchelkovo = form.querySelector('[value = "schelkovo"]'),

        cardType = form.querySelectorAll('[name = "card-type"]'),
        priceTotal = document.getElementById('price-total'),
        formInputs = form.querySelectorAll('input'),

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
            clubMozaika.checked = false;
            clibSchelkovo.checked = false;
        }
        //Очистка radio-button с выбором месяцев
        if(cardType){
            cardType.forEach( item => {
                item.checked = false;
            });
        }
        //Очистка итоговой цены
        if(priceTotal){
            priceTotal.innerHTML = 0;
        }
        //Очистка чекбокса с обработкой персональных данных
        if(useOfPersonalData){
            useOfPersonalData.checked = false;
        }
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        //Создание блока с текстом ошибки
        const createErrorMessage = () => {
            const error = document.createElement('div');
            error.classList.add('error-message');
            error.style.cssText = 'color: red; font-size: 16px; margin-top: 15px';
            personalData.append(error);
        } ;
        //Проверка чекбокса с персональными данными
        const checkSseOfPersonalDataCheckbox = () => {
            if(!useOfPersonalData.checked){
                createErrorMessage();
                form.querySelector('.error-message').textContent = 'Необходимо подтвердить согласие на обработку данных!';
            } else {
                if(form.querySelector('.error-message')){
                    form.querySelector('.error-message').remove();
                    sendFunc();
                } else {
                    sendFunc();
                }
            } 
        };
        //Проверка чекбокса с выбором клуба
        const checkClubCheckbox = () => {
            if(!clubMozaika.checked && !clibSchelkovo.checked){
                createErrorMessage();
                form.querySelector('.error-message').textContent = 'Необходимо выбрать клуб!';
            } else {
                if(form.querySelector('.error-message')){
                    form.querySelector('.error-message').remove();
                    sendFunc();
                } else {
                    sendFunc();
                }  
            }
        };
        //Проверка чекбоксов с клубом, ценой и персональными данными
        const checkBothCheckbox = () => {
            for(let i = 0; i < cardType.length; i++){
                if(cardType[i].checked){
                    if(!clubMozaika.checked && !clibSchelkovo.checked && !useOfPersonalData.checked){
                        form.querySelector('.error-message').textContent = 'Необходимо выбрать клуб и подтвердить согласие на обработку данных!';
                    } else if(!useOfPersonalData.checked){
                        form.querySelector('.error-message').textContent = 'Необходимо подтвердить согласие на обработку данных!';
                    } else if(!clubMozaika.checked && !clibSchelkovo.checked){
                        form.querySelector('.error-message').textContent = 'Необходимо выбрать клуб!';
                    } else {
                        form.querySelector('.error-message').remove();
                        sendFunc();
                    }
                    break;
                } else {
                    form.querySelector('.error-message').textContent = 'Необходимо выбрать кол-во месяцев!';
                }
            }
        };

        if(useOfPersonalData && clubs){
            if(form.querySelector('.error-message')){
                checkBothCheckbox();
                return;
            } else {
                createErrorMessage();
                checkBothCheckbox();
            }
        } else if(useOfPersonalData){
            checkSseOfPersonalDataCheckbox();
        } else if(clubs){
            checkClubCheckbox();
        }
      
    });
    //Функция отправки
    const sendFunc = () => {
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
    };

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