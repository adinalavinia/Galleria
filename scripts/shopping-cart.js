// modal

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
}





// const addToCartBtn = document.querySelector('.shopping-cart');
// const itemsList = document.querySelector('.cart-items');

// addToCartBtn.addEventListener('click', addToShoppingList);

// function addToShoppingList(){


//     let li = document.createElement('li');
//     li.innerHTML = document.querySelector('.title-detail');



//     let deleteBtn = document.createElement('button');
//     deleteBtn.innerHTML = '<span class="material-symbols-outlined">delete</span>';
//     deleteBtn.style.backgroundColor = 'transparent';
//     deleteBtn.style.border = 'none';
//     deleteBtn.style.cursor = 'pointer';


//     li.appendChild(deleteBtn);
//     // itemsList.appendChild(li);
    
    
//     deleteBtn.addEventListener('click', removeItem);
    
//     function removeItem(e){
//         const item = e.target.value;
//         li.remove(item);
//     }
      
// }