
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const btn = document.querySelector(".button-box");

btn.addEventListener('click', fullScreen);
function fullScreen(){
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
};


closeBtn.addEventListener('click', closeImage);
function closeImage() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

const shoppingCartBtn = document.querySelector('.shopping-cart');
const popup = document.querySelector('.popup-text');
shoppingCartBtn.addEventListener('click', showPopup)

function showPopup(){
    popup.style.display = "flex"
    setTimeout(() => {
        popup.style.display = "none";
    }, 3000)
}







