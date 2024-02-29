const checkoutBtn = document.querySelector('.checkout-button');
const modalSendOrder = document.querySelector('.modal-send-order');
const closeMessageSendOrder = document.querySelector('.close-send-order');

const errorRequiredShoppingCart = document.querySelector('.error-required');
const errorNameRequiredShoppingCart = document.querySelector('.name-input');
const errorNameRequiredInput = document.querySelector('.error-name-input');
const errorAddressRequiredShoppingCart = document.querySelector('.address-input');
const errorAddressRequiredInput = document.querySelector('.error-address-input');
const errorPostalRequiredShoppingCart = document.querySelector('.postal-code-input');
const errorPostalRequiredInput = document.querySelector('.error-postal-code-input');
const errorCityRequiredShoppingCart = document.querySelector('.city-input');
const errorCityRequiredInput = document.querySelector('.error-city-input');
const errorCountryRequiredShoppingCart = document.querySelector('.country-input');
const errorCountryRequiredInput = document.querySelector('.error-country-input');
const errorPhoneRequiredShoppingCart = document.querySelector('.phone-input');
const errorPhoneRequiredInput = document.querySelector('.error-phone-input');

checkoutBtn.addEventListener('click', sendOrder);
function sendOrder(){
    if(errorNameRequiredShoppingCart.value !== '' && errorAddressRequiredShoppingCart.value !== '' && errorPostalRequiredShoppingCart.value !== '' && errorCityRequiredShoppingCart.value !== '' && errorCountryRequiredShoppingCart.value !== '' && errorPhoneRequiredShoppingCart.value !== ''){
        modalSendOrder.style.display = 'flex';
        modalSendOrder.style.alignItems = 'center';
        modalSendOrder.style.justifyContent = 'center';
    } 

    if(errorNameRequiredShoppingCart.value == '') {
        errorNameRequiredInput.style.display = 'block';
    }
    if(errorAddressRequiredShoppingCart.value == '') {
        errorAddressRequiredInput.style.display = 'block';
    }
    if(errorPostalRequiredShoppingCart.value == '') {
        errorPostalRequiredInput.style.display = 'block';
    }
    if(errorCityRequiredShoppingCart.value == '') {
        errorCityRequiredInput.style.display = 'block';
    }
    if(errorCountryRequiredShoppingCart.value == '') {
        errorCountryRequiredInput.style.display = 'block';
    }
    if(errorPhoneRequiredShoppingCart.value == '') {
        errorPhoneRequiredInput.style.display = 'block';
    }
}

errorNameRequiredShoppingCart.addEventListener('keyup', (event) => {
    let errorNameRequiredShoppingCartValue = event.target.value;
    if(errorNameRequiredShoppingCartValue == ''){
        errorNameRequiredInput.style.display = 'block';
    } else {
        errorNameRequiredInput.style.display = 'none';
    }
})

errorAddressRequiredShoppingCart.addEventListener('keyup', (event) => {
    let errorAddressRequiredShoppingCartValue = event.target.value;
    if(errorAddressRequiredShoppingCartValue == ''){
        errorAddressRequiredInput.style.display = 'block';
    } else {
        errorAddressRequiredInput.style.display = 'none';
    }
})

errorPostalRequiredShoppingCart.addEventListener('keyup', (event) => {
    let errorPostalRequiredShoppingCartValue = event.target.value;
    if(errorPostalRequiredShoppingCartValue == ''){
        errorPostalRequiredInput.style.display = 'block';
    } else {
        errorPostalRequiredInput.style.display = 'none';
    }
})

errorCityRequiredShoppingCart.addEventListener('keyup', (event) => {
    let errorCityRequiredShoppingCartValue = event.target.value;
    if(errorCityRequiredShoppingCartValue == ''){
        errorCityRequiredInput.style.display = 'block';
    } else {
        errorCityRequiredInput.style.display = 'none';
    }
})

errorCountryRequiredShoppingCart.addEventListener('keyup', (event) => {
    let errorCountryRequiredShoppingCartValue = event.target.value;
    if(errorCountryRequiredShoppingCartValue == ''){
        errorCountryRequiredInput.style.display = 'block';
    } else {
        errorCountryRequiredInput.style.display = 'none';
    }
})

errorPhoneRequiredShoppingCart.addEventListener('keyup', (event) => {
    let errorPhoneRequiredShoppingCartValue = event.target.value;
    if(errorPhoneRequiredShoppingCartValue == ''){
        errorPhoneRequiredInput.style.display = 'block';
    } else {
        errorPhoneRequiredInput.style.display = 'none';
    }
})


closeMessageSendOrder.addEventListener('click', closeModalOrder);
function closeModalOrder(){
    modalSendOrder.style.display = 'none';
    localStorage.clear()
    location.href = 'index.html';
}