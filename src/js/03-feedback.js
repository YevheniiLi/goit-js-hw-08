import throttle from 'lodash.throttle';


const refs = {
    form: document.querySelector('.feedback-form'),
    message: document.querySelector('textarea'),
    email: document.querySelector('input'),
};


refs.form.addEventListener('submit', onFormSubmit);
refs.message.addEventListener('input', throttle(onInputData, 500));
refs.email.addEventListener('input', throttle(onInputData, 500));



const STORAGE_KEY = "feedback-form-state";
const savedValue = localStorage.getItem(STORAGE_KEY);
const parsedValue = JSON.parse(savedValue);
const formData = { ...parsedValue };

onLocalStorage();

function onInputData(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
   
    console.log('Form accepted :)');
    console.log(formData);
    
}

function onLocalStorage(){
    const savedMessage = localStorage.getItem(STORAGE_KEY)
        if(savedMessage){
            
            refs.message.value = savedMessage; 
            refs.email.value = savedMessage;   
  }
}