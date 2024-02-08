
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















