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
