// const registerFormSubmit = document.querySelector('.register-button');
// registerFormSubmit.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(e.target.emailRegister.value)

// });


const usersString = localStorage.getItem('Users');
const users = JSON.parse(usersString) ;

let username = document.getElementById("name-register").value;
let email = document.getElementById("email-register").value;
let password = document.getElementById("pass-register").value;
let confirmPasswordV = document.getElementById("confirm-pass-register").value;
let userData = [
    {Username: username,
    Email: email,
    Password: password,
    ConfirmPassword: confirmPasswordV
}];

users.push(userData);
localStorage.setItem('Users', JSON.stringify(users));

console.log(userData);



// const emailVerified = document.getElementById("email-login").value;

// const userFromLocalStorage = JSON.parse(localStorage.getItem(emailVerified));

// if(!userFromLocalStorage){
//     console.log("user doesn't exist");
// }

// const passwordVerified = document.getElementById("pass-login").value;

// if (userFromLocalStorage.passwordVerified !== userData[Password]){
//     console.log('wrong password');
// }

// console.log('logged in successfully');