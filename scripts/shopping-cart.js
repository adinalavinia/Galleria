const addToCartBtn = document.querySelectorAll('.shopping-cart');
const cartItemsList = document.querySelectorAll('.cart-items');

const itemsListName = document.querySelector('.cart-item-name');
const itemsListPrice = document.querySelector('.cart-item-price');
const itemsListQuantity = document.querySelector('.cart-item-quantity');

let productsArray = [
    {
        id: 0,
        name: 'Starry Night',
        price: '$100.000.000',
        links: 'starry-night.html'
    },
    {
        id: 1,
        name: 'Girl with a Pearl Earring',
        price: '$100.000.000',
        links: 'girl-with-a-pearl-earring.html'
    },
    {
        id: 2,
        name: 'Guernica', 
        price: '$100.000.000',
        links: 'guernica.html'
    },
    {
        id: 3,
        name: 'Penitent Magdalene',
        price: '$100.000.000',
        links: 'penitent-magdalene.html'
    }
];


for(let i = 0; i < addToCartBtn.length; i++){
    addToCartBtn[i].addEventListener('click', addToShoppingList);
}


function addToShoppingList(e){
    let btnShop = e.target;

    let domainDetail = 'http://127.0.0.1:5500/';
    let urlDetail = window.location.href;
    urlDetail = urlDetail.replace(domainDetail, '');

    for(let i = 0; i < productsArray.length; i++){
        let nameShop = productsArray[i].name;
        let priceShop = productsArray[i].price;
        let link = productsArray[i].links;

        if(urlDetail == link){
            const ulShop = document.createElement('ul');
            ulShop.classList.add('cart-items-list-line');

            const shopItemName = document.createElement('li');
            shopItemName.classList.add('cart-item-name');
            shopItemName.innerHTML = nameShop;
            console.log(shopItemName);

            const shopItemPrice = document.createElement('li');
            shopItemPrice.classList.add('cart-item-price');
            shopItemPrice.innerHTML = priceShop;
            console.log(shopItemPrice);

            const shopItemQuantity = document.createElement('li');
            shopItemQuantity.classList.add('cart-item-quantity');
            console.log(shopItemQuantity);

            const shopDeleteBtn = document.createElement('button');
            shopDeleteBtn.innerHTML = '<span class="material-symbols-outlined">delete</span>';
            shopDeleteBtn.style.backgroundColor = 'transparent';
            shopDeleteBtn.style.border = 'none';
            shopDeleteBtn.style.cursor = 'pointer';
            console.log(shopDeleteBtn);

        
            ulShop.appendChild(shopItemName);
            ulShop.appendChild(shopItemPrice);
            ulShop.appendChild(shopDeleteBtn);
        }
        
    }


}











    
    
//     deleteBtn.addEventListener('click', removeItem);
    
//     function removeItem(e){
//         const item = e.target.value;
//         li.remove(item);
//     }
      
// }