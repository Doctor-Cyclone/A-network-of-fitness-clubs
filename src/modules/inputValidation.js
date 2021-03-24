const inputValidation = () => {
    const inputName = document.querySelectorAll('[name = "name"]'),
        inputPhone = document.querySelectorAll('[name = "phone"]');

    const blurRegExp = (item) => {
        item.addEventListener('blur', () =>{
            item.value = item.value.replace(/\-{2,}/g, '-');
            item.value = item.value.replace(/\s{2,}/g, ' ');
            item.value = item.value.replace(/\+{2,}/g, '+');
            item.value = item.value.replace(/\({2,}/g, '(');
            item.value = item.value.replace(/\){2,}/g, ')');
            item.value = item.value.replace(/^[\s]+|[ \s]+$/, '');
            item.value = item.value.replace(/^[/-]+|[/-]+$/, '');

            if(item.getAttribute('name') === 'name'){
                //Минимум два символа
                if(/\D{2}/g.test(item.value)){
                    //Первый буквы слов в верхнем регистре
                    const newArr = item.value.split(' ').map( item => {
                        return item.charAt(0).toUpperCase() + item.substring(1).toLowerCase();
                    });
                    item.value = newArr.join(' ');
                } else {
                    item.value = '';
                }                
            }
            if(item.getAttribute('name') === 'phone'){
                item.value = item.value.replace(/\-{1,}/g, '');
                item.value = item.value.replace(/\s{1,}/g, '');
                item.value = item.value.replace(/\+{1,}/g, '');
                item.value = item.value.replace(/\({1,}/g, '');
                item.value = item.value.replace(/\){1,}/g, '');
                item.value = item.value.replace(/^[\s]+|[ \s]+$/, '');
                item.value = item.value.replace(/^[/-]+|[/-]+$/, '');

                item.value = item.value.replace(/\d{12,}/g, item.value.substr(0, 11));

                let phoneLength = item.value.split('');

                if(/\+?[78]([-()]*\d){10}/g.test(item.value.replace(/\s{1,}/g, ''))){                
                    return;
                } else {
                    item.value = '';
                    if(phoneLength[0] !== '7'){
                        if(phoneLength[0] !== '8'){
                            if(phoneLength.length < 11){
                                alert(`Номер телефона должен начинаться с 8 или 7
                                Вы ввели ${phoneLength.length} цифр из 11!`);
                            } else {
                                alert(`Номер телефона должен начинаться с 8 или 7`);
                            }
                        } else if(phoneLength.length < 11){
                            alert(`Вы ввели ${phoneLength.length} цифр из 11!`);
                        }
                    } else if(phoneLength.length < 11){
                        alert(`Вы ввели ${phoneLength.length} цифр из 11!`);
                    }
                }
            }
        });
    };

    const validation = (item) => {
        if(item.getAttribute('name') === 'name'){
            item.addEventListener('input', () => {
                item.value = item.value.replace(/[^а-яё\- ]/gi, '');
            });
            blurRegExp(item);
        } else {
            item.addEventListener('input', () =>{
                item.value = item.value.replace(/[^-()\d\+ ]/g, '');
            });
            blurRegExp(item);
        }
    };

    inputName.forEach( item => {
        validation(item);
    });

    inputPhone.forEach( item => {
        validation(item);
    });
};

export default inputValidation;