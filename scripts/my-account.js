const emailLoginError = document.querySelector('.email-error');
const passwordLoginError = document.querySelector('.pass-error');
const loginButton = document.querySelector('.login-button');

const errorEmailLogin = document.querySelector('.error-email-login');
const validEmailLogin = document.querySelector('.valid-email-login');
const emailLogin = document.getElementById('email-login');
emailLogin.addEventListener('keyup', (event) => {
    let emailLoginValue = event.target.value;

    if(emailLoginValue.includes('@')) {
        emailLogin.style.border = '1px solid green';
        errorEmailLogin.style.display = 'none';
        validEmailLogin.style.display = 'block';
    } else {
        emailLogin.style.border = '1px solid red';
        errorEmailLogin.style.display = 'block';
        validEmailLogin.style.display = 'none';
        emailLoginError.style.display = 'none';
    }

    if(emailLoginValue == ''){
        emailLogin.style.border = null;
        errorEmailLogin.style.display = 'none';
        validEmailLogin.style.display = 'none';
        emailLoginError.style.display = 'block';
    }
})


const errorPasswordLogin = document.querySelector('.error-pass-login');
const validPasswordLogin = document.querySelector('.valid-pass-login');
const passwordLogin = document.getElementById('pass-login');
passwordLogin.addEventListener('keyup', (event) => {
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
        errorPasswordLogin.style.display = 'block';
        validPasswordLogin.style.display = 'none';
        passwordLoginError.style.display = 'none';
    } else {
        passwordLogin.style.border = '1px solid green';
        errorPasswordLogin.style.display = 'none';
        validPasswordLogin.style.display = 'block';
        passwordLoginError.style.display = 'none';
    }

    if(passwordLoginValue == ''){
        passwordLogin.style.border = null;
        errorPasswordLogin.style.display = 'none';
        validPasswordLogin.style.display = 'none';
        passwordLoginError.style.display = 'block';
    }
})

// errors login required

function loginForm(){

    if(emailLogin.value == ''){
        emailLoginError.style.display = 'block';
    } 

    if(passwordLogin.value == ''){
        passwordLoginError.style.display = 'block';
    }

    if(emailLogin.value == '' || passwordLogin.value == ''){
        // 
       
    } else {
        location.href = 'index.html';
    }
    
}




const errorEmailRegister = document.querySelector('.error-email-register');
const validEmailRegister = document.querySelector('.valid-email-register');
const emailRegister = document.getElementById('email-register');
emailRegister.addEventListener('keyup', (event) => {
    let emailRegisterValue = event.target.value;

    if(emailRegisterValue.includes('@')) {
        emailRegister.style.border = '1px solid green';
        errorEmailRegister.style.display = 'none';
        validEmailRegister.style.display = 'block';
    } else {
        emailRegister.style.border = '1px solid red';
        errorEmailRegister.style.display = 'block';
        validEmailRegister.style.display = 'none';
        emailRegsiterError.style.display = 'none';
    }

    if(emailRegisterValue == ''){
        emailRegister.style.border = null;
        errorEmailRegister.style.display = 'none';
        validEmailRegister.style.display = 'none';
        emailRegsiterError.style.display = 'block';
    }
})


const errorPasswordRegister = document.querySelector('.error-pass-register');
const validPasswordRegister = document.querySelector('.valid-pass-register');
const passwordRegister = document.getElementById('pass-register');
passwordRegister.addEventListener('keyup', (event) => {
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
        errorPasswordRegister.style.display = 'block';
        validPasswordRegister.style.display = 'none';
        passwordRegisterError.style.display = 'none';
    } else {
        passwordRegister.style.border = '1px solid green';
        errorPasswordRegister.style.display = 'none';
        validPasswordRegister.style.display = 'block';
        passwordRegisterError.style.display = 'none';
    }

    if(passwordRegisterValue == ''){
        passwordRegister.style.border = null;
        errorPasswordRegister.style.display = 'none';
        validPasswordRegister.style.display = 'none';
        passwordRegisterError.style.display = 'block';
    }
})


const errorConfirmPasswordRegister = document.querySelector('.error-confirm-pass-register');
const validConfirmPasswordRegister = document.querySelector('.valid-confirm-pass-register');
const confirmPassword = document.getElementById('confirm-pass-register');
confirmPassword.addEventListener('keyup', (event) => {

    if(passwordRegister.value !== confirmPassword.value){
        confirmPassword.style.border = '1px solid red';
        errorConfirmPasswordRegister.style.display = 'block';
        validConfirmPasswordRegister.style.display = 'none';
        confirmPasswordError.style.display = 'none';
    } else {
        confirmPassword.style.border = '1px solid green';
        errorConfirmPasswordRegister.style.display = 'none';
        validConfirmPasswordRegister.style.display = 'block';
        confirmPasswordError.style.display = 'none';
    }

    if(confirmPassword.value == ''){
        confirmPassword.style.border = null;
        errorConfirmPasswordRegister.style.display = 'none';
        validConfirmPasswordRegister.style.display = 'none';
        confirmPasswordError.style.display = 'block';
    }
})




// errors register required
const nameError = document.querySelector('.name-error');
const emailRegsiterError = document.querySelector('.email-register-error');
const passwordRegisterError = document.querySelector('.pass-register-error');
const confirmPasswordError = document.querySelector('.confirm-pass-register-error');
const errorTerms = document.querySelector('.error-terms');
const nameRegister = document.getElementById('name-register');
const checkboxTerms = document.getElementById('terms');
const registerButton = document.querySelector('.register-button');

nameRegister.addEventListener('keyup', (event) => {
    if(nameRegister.value == ''){
        nameError.style.display = 'block';
    }else {
        nameError.style.display = 'none';
    }

})

function registerForm(){

    if(nameRegister.value == ''){
        nameError.style.display = 'block';
    } 

    if(emailRegister.value == ''){
        emailRegsiterError.style.display = 'block';
    } 

    if(passwordRegister.value == ''){
        passwordRegisterError.style.display = 'block';
    }

    if(confirmPassword.value == ''){
        confirmPasswordError.style.display = 'block';
    }

    if(checkboxTerms.checked === false){
        errorTerms.style.display = 'block';
    } else {
        errorTerms.style.display = 'none';
    }

      
    if(checkboxTerms.checked === false || nameRegister.value == '' || emailRegister.value == '' || passwordRegister.value == '' || confirmPassword.value == ''){
       // 
       
    } else {
        location.href = 'index.html';
    }
    
}


// modal

const modalForgotPassword = document.querySelector('.modal-forgot-password');
const forgotMessageBtn = document.querySelector('.forgot-password-button');
const closeModalForgotPassword = document.querySelector('.close-forgot-password')

forgotMessageBtn.addEventListener('click', sendMessageForgotPasswsord);
function sendMessageForgotPasswsord(){
    modalForgotPassword.style.display = 'flex';
    modalForgotPassword.style.alignItems = 'center';
    modalForgotPassword.style.justifyContent = 'center';    
}

closeModalForgotPassword.addEventListener('click', closeMessageForgotPassword);
function closeMessageForgotPassword() {
    modalForgotPassword.style.display = 'none';
}

const modalSendEmail = document.querySelector('.modal-send-email');
const sendMessageBtn = document.querySelector('.send-forgot-password');
const closeModalSendMessage = document.querySelector('.close-reset-email');
const sendEmailContent = document.querySelector('.modal-send-email-content');


sendMessageBtn.addEventListener('click', sendResetEmail);
function sendResetEmail(){
    modalSendEmail.style.display = 'flex';
    modalSendEmail.style.alignItems = 'center';
    modalSendEmail.style.justifyContent = 'center';
    
    modalForgotPassword.style.display = 'none';
}

closeModalSendMessage.addEventListener('click', closeResetEmail);
function closeResetEmail() {
    modalSendEmail.style.display = 'none';
}

closeModalSendMessage.addEventListener('click', resetEmail);
function resetEmail(){
    sendEmailContent.style.display = 'none';
}


