let email = document.getElementById('email');
let submitEmail = document.getElementById('submitEmail');

submitEmail.addEventListener('click',validateEmail);
email.addEventListener('input',checkIfEmpty);

function validateEmail() {

    if(!email.validity.valid) addErrorMessage();

}

function addErrorMessage(){

    let tag = document.createElement("p");
    let text = document.createTextNode("Oops! That doesn't look like an email address");
    let createdElement = document.querySelector('.error-message');

    tag.appendChild(text);
    tag.setAttribute('class', 'error-message');

    let element = document.querySelector(".footer__input-wrapper");

    if(element.contains(createdElement)) return
    else
    element.appendChild(tag);
}

function checkIfEmpty(){
    
    let createdElement = document.querySelector('.error-message');
    let email = document.getElementById('email');

    if (email.validity.valid && createdElement) createdElement.remove();
    if (email.value === '' && createdElement) createdElement.remove();
}

document.addEventListener('invalid', (function(){
    return function(e) {
      //prevent the browser from showing default error bubble / hint
      e.preventDefault();
      // optionally fire off some custom validation handler
    };
})(), true);