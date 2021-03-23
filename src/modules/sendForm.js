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
        form = document.getElementById(id),
        formInputs = form.querySelectorAll('input'),
        statusMessage = document.createElement('div'),
        useOfPersonalData = form.querySelector('input[type=checkbox]'),
        sendBtn = form.querySelector('button'),
        thanks = document.getElementById('thanks'),
        thanksFormContent = thanks.querySelector('.form-content');

        statusMessage.style.color = '#FFD11A';

    //Проверка чекбокса с обработкой персональных данных
    const useOfPersonalDataCheck = () => {
        if(useOfPersonalData){
            sendBtn.disabled = true;
            useOfPersonalData.addEventListener('change', () => {
                sendBtn.disabled = false;
            });
        }
    };
    useOfPersonalDataCheck();

    const clearInputAfterSubmit = () => {
        //Очистка полей после отправки данных
        formInputs.forEach( item => {
            item.value = '';
        });
        //Снатие галочки после отправки данных
        useOfPersonalData.checked = false;
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();

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
                
            })
            .catch((error) => {
                console.log(error);

                thanks.style.display = 'block';
                thanksFormContent.innerHTML = errorMessage;
                statusMessage.textContent = '';

                clearInputAfterSubmit();
            });
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