const checkoutBtn = document.querySelector('.checkout-button');
const modalSendOrder = document.querySelector('.modal-send-order');
const closeMessageSendOrder = document.querySelector('.close-send-order');
checkoutBtn.addEventListener('click', sendOrder);
function sendOrder(){
    modalSendOrder.style.display = 'flex';
    modalSendOrder.style.alignItems = 'center';
    modalSendOrder.style.justifyContent = 'center';
}

closeMessageSendOrder.addEventListener('click', closeModalOrder);
function closeModalOrder(){
    modalSendOrder.style.display = 'none';
    localStorage.clear()
    location.href = 'index.html';
}