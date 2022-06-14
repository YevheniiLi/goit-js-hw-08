import throttle from 'lodash.throttle';


const refs = {
    form: document.querySelector('.feedback-form'),
    message: document.querySelector('textarea'),
    email: document.querySelector('input'),
};

    let formData = {}
    const STORAGE_KEY = "feedback-form-state";

refs.form.addEventListener('submit', onFormSubmit);
refs.message.addEventListener('input', throttle(onMessageInput, 500));
refs.email.addEventListener('input', throttle(onInputData, 500));

onLocalStorage();

function onInputData(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit(evt) {
    evt.preventDefault();
       console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    formData = {};

}

function onMessageInput(event) {
    let message = event.target.value;
     localStorage.setItem(STORAGE_KEY,message);
 }
 
 function onLocalStorage() {
     let savedInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));
     for (const key in savedInfo) {
       if (key) {
         formRef[key].value = savedInfo[key];
         formData = savedInfo;
       }
     }
   }

