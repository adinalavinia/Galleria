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


registerButton.addEventListener('click', registerForm);

function registerForm(event){

    event.preventDefault();
    const nameStored = nameRegister.value;
    const emailStored = emailRegister.value;
    const passwordStored = passwordRegister.value;
    const confirmPasswordStored = confirmPassword.value;

    const user = {
        nameStored,
        emailStored,
        passwordStored,
        confirmPasswordStored
    };

    const modalRegisterSuccess = document.querySelector('.modal-register-success');
    const closeModalRegisterSuccess = document.querySelector('.close-modal-register-success')

    closeModalRegisterSuccess.addEventListener('click', closeMessageModalRegister);
    function closeMessageModalRegister() {
        modalRegisterSuccess.style.display = 'none';
        // location.href = "index.html";
        location.reload();
    }

    if(emailStored !== '' && nameStored !== '' && passwordStored !== '' && confirmPasswordStored !== '' && checkboxTerms.checked === true){
        const savedUsers = JSON.parse(localStorage.getItem('users'));

        modalRegisterSuccess.style.display = 'flex';
        modalRegisterSuccess.style.alignItems = 'center';
        modalRegisterSuccess.style.justifyContent = 'center';

        if(savedUsers){
            
            const foundUser = savedUsers.find((user) => user.emailStored === emailStored)
            if(foundUser){
                modalRegisterSuccess.style.display = 'none';
                alert('This user already exist!'); 
                return;
            } 

            savedUsers.push(user);
            localStorage.setItem('users', JSON.stringify(savedUsers))
        }else {
            localStorage.setItem('users', JSON.stringify([user]))
        }
    }

    registerErrors()

}

function registerErrors(){
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

}