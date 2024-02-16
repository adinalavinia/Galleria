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

loginButton.addEventListener('click', loginForm)

function loginForm(event){
    
    
    event.preventDefault();
    const emailStored = emailLogin.value;
    const passwordStored = passwordLogin.value;

    if(emailStored !== '' && passwordStored !== ''){
        const users = JSON.parse(localStorage.getItem('users'));

    
        if(!users || users.length === 0){
            alert('This email does not exist!')
            
        }

        const foundUser = users.find((user) => user.emailLogin === emailStored && user.passwordLogin === passwordStored);

        if(foundUser){
            localStorage.setItem('logged-user', JSON.stringify(foundUser))
            location.href = 'index.html';
        } else {
            
            alert('This user does not exist!')
        }

    }

    loginErrors();
    
}


function loginErrors(){
    if(emailLogin.value == ''){
        emailLoginError.style.display = 'block';
    } 

    if(passwordLogin.value == ''){
        passwordLoginError.style.display = 'block';
    }

    // if(emailLogin.value == '' || passwordLogin.value == ''){
    //     // 
       
    // } 
    // else {
    //     location.href = 'index.html';
    // }
}





