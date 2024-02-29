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

const logoutButton = document.querySelector('.logout-button-box');
const allForms = document.querySelector('.login-register-forms');
const modalLoginError = document.querySelector('.modal-login-error');
const successLogin = document.querySelector('.modal-success-login');
const successLoginCloseBtn = document.querySelector('.close-modal-success-login');

loginButton.addEventListener('click', loginForm)

function loginForm(event){
    event.preventDefault();

    let emailLoginValue = emailLogin.value;
    let passwordLoginValue = passwordLogin.value;
    loginErrors();
    
    if(emailLogin !== '' && passwordLogin !== ''){
        const users = JSON.parse(localStorage.getItem('users'));

        if(!users || users.length === 0){
            loginErrors();
        }
        
        const foundUser = users.find((user) => user.emailStored == emailLoginValue && user.passwordStored == passwordLoginValue);
        if(foundUser){
            localStorage.setItem('logged-user', JSON.stringify(foundUser));
            successLogin.style.display = "flex";
            successLogin.style.alignItems = 'center';
            successLogin.style.justifyContent = 'center';
        } else {
            alert("This user does not exist!")
        }       
    }
}

if(localStorage.getItem('users') !== null && localStorage.getItem('logged-user') !== null){
    allForms.style.display = 'none';
    logoutButton.style.display = 'flex';
}


function loginErrors(){
    if(emailLogin.value == ''){
        emailLoginError.style.display = 'block';
    } 

    if(passwordLogin.value == ''){
        passwordLoginError.style.display = 'block';
    }
}


logoutButton.addEventListener('click', logoutUser);
function logoutUser(){
    localStorage.removeItem('logged-user');
    location.href = 'index.html';
}

successLoginCloseBtn.addEventListener('click', closeModalSuccessLogin);
function closeModalSuccessLogin(){
    successLogin.style.display = "none";
    location.href = 'index.html';
}

window.onclick = function(event) {
    if (event.target == successLogin) {
        successLogin.style.display = 'none';
        location.href = 'index.html';
    }
}