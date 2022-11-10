import {
    saveDataToLocalStorage,
    loadLocalStorage,
    removeLocalStorage
} from './storage'
import throttle from 'lodash.throttle'
/**
 * 1) Oтслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы.
 *  // Пусть ключом для хранилища будет строка "feedback-form-state".//
 * 2) При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. 
 *  В противном случае поля должны быть пустыми.
 * 3) При сабмите формы очищай хранилище и поля формы,
 *   а также выводи объект с полями email, message и текущими их значениями в консоль.
 * 4) Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. */

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
}
const FEEDBACK_LOCAL_STORAGE_KEY = "feedback-form-state";
refs.form.addEventListener('submit',onSubmit)
refs.form.addEventListener('input', throttle(onEnteringToInput, 500))

function onSubmit(ev) {
    ev.preventDefault();
    if (refs.input.value && refs.textarea.value) {
         dataLogger({
        email: refs.input.value, message: refs.textarea.value
    });
    ev.currentTarget.reset();
    removeLocalStorage(FEEDBACK_LOCAL_STORAGE_KEY);
    }
   return
}
populateForm();

function onEnteringToInput() {
     const data = {
        inputValue: refs.input.value,
        feedbackValue: refs.textarea.value
    };
    return saveDataToLocalStorage(FEEDBACK_LOCAL_STORAGE_KEY, data);
    
}
function populateForm() {
    const saveData = loadLocalStorage(FEEDBACK_LOCAL_STORAGE_KEY)
    if (!saveData) {
        return
    }
    const { inputValue, feedbackValue } = saveData;
    refs.input.value = inputValue;
    refs.textarea.value = feedbackValue;
}
function dataLogger({email,message}={}) {
    
    return console.log({email,message});
}
