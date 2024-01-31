const errorEmailLogin = document.querySelector('.error-email-login');
const validEmailLogin = document.querySelector('.valid-email-address');
const emailLogin = document.getElementById("email-login");
emailLogin.addEventListener('blur', (event) => {
    let emailLoginValue = event.target.value;

    if(emailLoginValue.includes('@')) {
        emailLogin.style.border = '1px solid green';
        errorEmailLogin.style.display = 'none';
        validEmailLogin.style.display = 'block';
    } else {
        emailLogin.style.border = '1px solid red';
        errorEmailLogin.style.display = 'block';
        validEmailLogin.style.display = 'none';
    }

    if(emailLoginValue == ''){
        emailLogin.style.border = null;
        errorEmailLogin.style.display = 'none';
        validEmailLogin.style.display = 'none';
    }
})

const passwordLogin = document.getElementById('pass-login');
passwordLogin.addEventListener('blur', (event) => {
    let passwordLoginValue = event.target.value;
    let hasCapitalLetter = false;
    let hasLowerLetter = false;
    let hasNumbers = false;

    for(let i = 0; i < passwordLoginValue.length; i++){
        const character = passwordLoginValue[i];

        if(character >= 'A' && character <= 'Z'){
            hasCapitalLetter = true;
        }

        if(character >= 'a' && character <= 'z'){
            hasLowerLetter = true;
        }

        if(character >= '0' && character <= '9'){
            hasNumbers = true;
        }
    }

    if(hasCapitalLetter == false || hasLowerLetter == false || hasNumbers == false ) {
        passwordLogin.style.border = '1px solid red';
    } else {
        passwordLogin.style.border = '1px solid green';
    }

    if(passwordLoginValue == ''){
        passwordLogin.style.border = null;
    }
})


const nameRegister = document.getElementById('name-register');
nameRegister.addEventListener('blur', (event) => {
    let nameRegisterValue = event.target.value;

    if(nameRegisterValue.length < 3) {
        nameRegister.style.border = '1px solid red';
    } else {
        nameRegister.style.border = '1px solid green';
    }

    if(nameRegisterValue == ''){
        nameRegister.style.border = null;
    }
})


const emailRegister = document.getElementById('email-register');
emailRegister.addEventListener('blur', (event) => {
    let emailRegisterValue = event.target.value;

    if(emailRegisterValue.includes('@')) {
        emailRegister.style.border = '1px solid green';
    } else {
        emailRegister.style.border = '1px solid red';
    }

    if(emailRegisterValue == ''){
        emailRegister.style.border = null;
    }
})


const passwordRegister = document.getElementById('pass-register');
passwordRegister.addEventListener('blur', (event) => {
    let passwordRegisterValue = event.target.value;
    let hasCapitalLetter = false;
    let hasLowerLetter = false;
    let hasNumbers = false;

    for(let i = 0; i < passwordRegisterValue.length; i++){
        const character = passwordRegisterValue[i];

        if(character >= 'A' && character <= 'Z'){
            hasCapitalLetter = true;
        }

        if(character >= 'a' && character <= 'z'){
            hasLowerLetter = true;
        }

        if(character >= '0' && character <= '9'){
            hasNumbers = true;
        }
    }

    if(hasCapitalLetter == false || hasLowerLetter == false || hasNumbers == false ) {
        passwordRegister.style.border = '1px solid red';
    } else {
        passwordRegister.style.border = '1px solid green';
    }

    if(passwordRegisterValue == ''){
        passwordRegister.style.border = null;
    }
})


const confirmPassword = document.getElementById('confirm-pass-register');
confirmPassword.addEventListener('keyup', (event) => {

    if(passwordRegister.value !== confirmPassword.value){
        confirmPassword.style.border = '1px solid red';
    } else {
        confirmPassword.style.border = '1px solid green';
    }

    if(confirmPassword.value == ''){
        confirmPassword.style.border = null;
    }
})