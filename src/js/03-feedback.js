

import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector('input');
const message = document.querySelector('textarea');

form.addEventListener("input", throttle(onInputText, 500));
form.addEventListener("submit", onFormSubmit);

const STORAGE_KEY = "feedback-form-state";
const savedValue = localStorage.getItem(STORAGE_KEY);
const parsedValue = JSON.parse(savedValue);
const formData = { ...parsedValue };

onLocaleStorage();

function onInputText(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    if (!email.value || !message.value) {
        return alert("Fill out the form please");
    }
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
    formData.email = '';
    formData.message = '';
}

function onLocaleStorage() {
    if (savedValue) {
        parsedValue.email === undefined ? email.value = "" : email.value = parsedValue.email;
        parsedValue.message === undefined ? message.value = "" : message.value = parsedValue.message;
    }
}