//FUNCTIONS

(function () {
    let email = document.getElementById('email');
    let submitEmail = document.getElementById('submitEmail');

    submitEmail.addEventListener('click',validateEmail);
    email.addEventListener('input',checkIfEmpty);
  })();

function validateEmail() {
    if(!email.validity.valid) errorMessage();
}

function errorMessage(){
    let email = document.getElementById('email');
    let tag = document.createElement("p");
    let text = document.createTextNode("Oops! That doesn't look like an email address");
    let createdElement = document.querySelector('.error-message');
    let element = document.querySelector(".footer__input-wrapper");

    tag.appendChild(text);
    tag.setAttribute('class', 'error-message');

    if(element.contains(createdElement)) return
    else {
    element.appendChild(tag);
    email.classList.add('highlight-error');
    }
}

function checkIfEmpty(){
    let email = document.getElementById('email');
    let createdElement = document.querySelector('.error-message');

    if (email.validity.valid && createdElement) {
        createdElement.remove();
        email.classList.remove('highlight-error');
    }
    if (email.value === '' && createdElement) {
        createdElement.remove();
        email.classList.remove('highlight-error');
    }
}

//prevent the browser from showing default error bubble / hint

document.addEventListener('invalid', (function(){
    return function(e) {
      e.preventDefault();
    };
})(), true);