let productsArray = [
    {
        id: 0,
        name: 'Starry Night',
        price: 100000000,
    },
    {
        id: 1,
        name: 'Girl with a Pearl Earring',
        price: 300000000,
    },
    {
        id: 2,
        name: 'Guernica', 
        price: 200000000,
    },
    {
        id: 3,
        name: 'Penitent Magdalene',
        price: 5000000,
    },
    {
        id: 4,
        name: 'The Storm on the Sea of Galilee', 
        price: 500000000,
    },
    {
        id: 5,
        name: 'The Great Wave off Kanagawa', 
        price: 2800000,
    },
    {
        id: 6,
        name: 'Van Gogh self-portrait', 
        price: 72000000,
    },
    {
        id: 7,
        name: 'The Sleeping Gypsy', 
        price: 5000000,
    },
    {
        id: 8,
        name: 'Lady with an Ermine', 
        price: 3000000000,
    },
    {
        id: 9,
        name: 'The Night Café', 
        price: 200000000,
    },
    {
        id: 10,
        name: 'The Basket of Apples', 
        price: 7000000,
    },
    {
        id: 11,
        name: 'The Boy in the Red Vest', 
        price: 109000000,
    },
    {
        id: 12,
        name: 'Arnolfini Portrait', 
        price: 400000000,
    },
    {
        id: 13,
        name: 'Mona Lisa', 
        price: 860000000,
    },
    {
        id: 14,
        name: 'The Swing', 
        price: 24000000,
    }
];

const addToCartBtn = document.querySelectorAll('.shopping-cart');
const popupDetail = document.querySelector('.popup-text');

for(let i = 0; i < addToCartBtn.length; i++){
    addToCartBtn[i].addEventListener('click', addToShoppingList);
}

function addToShoppingList(e) {
    const btnShop = e.currentTarget;
    if (!btnShop) return;

    const productIdShop = +btnShop.dataset.productId;

    const foundProduct = productsArray.find((product) => {
        return product.id === productIdShop;
    })

    if (!foundProduct) return;

    const shoppingCartProducts = JSON.parse(localStorage.getItem('products'));

    let foundCartItem;
    if (shoppingCartProducts) {
         foundCartItem = shoppingCartProducts.find((product) => {
            return product.id === productIdShop;
        })
    }

    if (foundCartItem) {
        alert("This is a unique product! You can add only one product of this type to the shopping cart!")
        popupDetail.style.display = "none";
        return;
    }

    if (shoppingCartProducts) {
        shoppingCartProducts.push(foundProduct);
        localStorage.setItem('products', JSON.stringify(shoppingCartProducts));
    } else {
        localStorage.setItem('products', JSON.stringify([foundProduct]));
    }
}

const totalCart = document.querySelector('.price-total');

function showItemsCart() {
    const products = JSON.parse(localStorage.getItem('products'));
    let cartWrapper = document.querySelector('.cart-wrapper');

    for(let i = 0; i < products.length; i++){
        let shopItemName = document.createElement('li');
        shopItemName.classList.add('cart-item-name');
        shopItemName.textContent = products[i].name;

        const shopItemPrice = document.createElement('li');
        shopItemPrice.classList.add('cart-item-price');
        shopItemPrice.textContent = "$" + products[i].price;

        const newListShop = document.createElement('ul')
        newListShop.classList.add('cart-items-list-line');

        const deleteBtnShoppingCart = document.createElement('li');
        deleteBtnShoppingCart.innerHTML = `<span class="material-symbols-outlined">delete</span>`;
        deleteBtnShoppingCart.style.backgroundColor = 'transparent';
        deleteBtnShoppingCart.style.border = 'none';
        deleteBtnShoppingCart.style.cursor = 'pointer';

        cartWrapper.appendChild(newListShop);
        newListShop.appendChild(shopItemName);
        newListShop.appendChild(shopItemPrice);
        newListShop.appendChild(deleteBtnShoppingCart);


        let cartCost = 0;
        for (let j = 0; j < products.length; j++ ){
            let priceCart = products[j].price;
            cartCost += priceCart;
            localStorage.setItem('cartCost', cartCost);
            totalCart.innerHTML = '$' + cartCost;
        }


        deleteBtnShoppingCart.addEventListener('click', deleteItem)
        function deleteItem() { 
            newListShop.remove();
            let index = products.indexOf()
            products.splice(index, 1)
            localStorage.setItem('products', JSON.stringify(products));
            location.reload(); 
        }
    }
}


let currentLocation = window.location.href;
if(location.href.includes('shopping-cart')){
    showItemsCart()
}

