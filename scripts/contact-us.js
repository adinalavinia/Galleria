const modalContactUs = document.querySelector('.modal-contact-us');
const sendMessageBtn = document.querySelector('.send-message-button');
const closeModalContactUs = document.querySelector('.close-modal-contact-us')

sendMessageBtn.addEventListener('click', sendMessage);
function sendMessage(){
    modalContactUs.style.display = 'flex';
    modalContactUs.style.alignItems = 'center';
    modalContactUs.style.justifyContent = 'center';
    
    
}

closeModalContactUs.addEventListener('click', closeMessageModal);
function closeMessageModal() {
    modalContactUs.style.display = 'none';
}