const firstName = document.getElementById('first-name');
const firstNameInput = document.getElementById('first-name-input');

const lastName = document.getElementById('last-name');
const lastNameInput = document.getElementById('last-name-input');

const email = document.getElementById('email');
const emailInput = document.getElementById('email-input');
const emailError = document.getElementsByClassName('error-msg-change');

const password = document.getElementById('password');
const passwordInput = document.getElementById('password-input');

const form  = document.getElementById('form');
const emailVal = emailInput.value;

form.addEventListener('submit', e => { 
    e.preventDefault(); 
    
    if (firstNameInput.value.length == 0) {
        firstName.classList.add('error');
    } else {
        firstName.classList.remove('error');
    }

    if (lastNameInput.value.length == 0) {
        lastName.classList.add('error');
    } else {
        lastName.classList.remove('error');
    }

    if (emailInput.value.length == 0) {
        email.classList.add('error');
    } else {
        email.classList.remove('error');
    }

    if (passwordInput.value.length == 0) {
        password.classList.add('error');
    } else {
        password.classList.remove('error');
    }
});



function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}