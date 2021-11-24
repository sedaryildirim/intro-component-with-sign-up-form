const firstName = document.getElementById('first-name');

const lastName = document.getElementById('last-name');

const emailAddressInput = document.getElementById('email-address-input');
const emailAddress = document.getElementById('email-address');

const passsword = document.getElementById('password');




form.addEventListener('submit', e => { 
    e.preventDefault(); 
    const emailVal = email.value;
    if (emailAddressInput.value.length == 0) {
        emailAddress.classList.add('error');
    } else {
    if (!validateEmail(emailVal)) { 
        passsword.classList.add('error'); 
    } else {
        passsword.classList.remove('error');
    }                                  
}});

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}