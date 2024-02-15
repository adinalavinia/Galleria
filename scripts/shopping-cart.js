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
        price: '$300.000.000',
        links: 'girl-with-a-pearl-earring.html'
    },
    {
        id: 2,
        name: 'Guernica', 
        price: '$200.000.000',
        links: 'guernica.html'
    },
    {
        id: 3,
        name: 'Penitent Magdalene',
        price: '$5.000.000',
        links: 'penitent-magdalene.html'
    },
    {
        id: 4,
        name: 'The Storm on the Sea of Galilee', 
        price: '$500.000.000',
        links: 'the-storm-on-the-sea-of-galilee.html'
    },
    {
        id: 5,
        name: 'The Great Wave off Kanagawa', 
        price: '$2.800.000',
        links: 'the-great-wave-off-kanagawa.html'
    },
    {
        id: 6,
        name: 'Van Gogh self-portrait', 
        price: '$72.000.000',
        links: 'van-gogh-self-portrait.html'
    },
    {
        id: 7,
        name: 'The Sleeping Gypsy', 
        price: '$5.000.000',
        links: 'the-sleeping-gypsy.html'
    },
    {
        id: 8,
        name: 'Lady with an Ermine', 
        price: '$3.000.000.000',
        links: 'lady-with-an-ermine.html'
    },
    {
        id: 9,
        name: 'The Night Café', 
        price: '$200.000.000',
        links: 'the-night-cafe.html'
    },
    {
        id: 10,
        name: 'The Basket of Apples', 
        price: '$7.000.000',
        links: 'the-basket-of-apples.html'
    },
    {
        id: 11,
        name: 'The Boy in the Red Vest', 
        price: '$109.000.000',
        links: 'the-boy-in-the-red-vest.html'
    },
    {
        id: 12,
        name: 'Arnolfini Portrait', 
        price: '$400.000.000',
        links: 'arnolfini-portrait.html'
    },
    {
        id: 13,
        name: 'Mona Lisa', 
        price: '$860.000.000',
        links: 'mona-lisa.html'
    },
    {
        id: 14,
        name: 'The Swing', 
        price: '$24.000.000',
        links: 'the-swing.html'
    }
];

const addToCartBtn = document.querySelectorAll('.shopping-cart');

for(let i = 0; i < addToCartBtn.length; i++){
    addToCartBtn[i].addEventListener('click', addToShoppingList);
};

function addToShoppingList(e){
    const btnShop = e.currentTarget;
    if(!btnShop){
        console.log(btnShop)
        return;
    };

    const productIdShop = +btnShop.dataset.productId;

    const foundProduct = productsArray.find((product) => {
        return product.id === productIdShop;
    });

    if(!foundProduct){
        console.log(productIdShop)
        console.log(foundProduct)
        return;
    };

    const shoppingCartProducts = JSON.parse(localStorage.getItem('products'));

    let foundCartItem;
    if(shoppingCartProducts){
         foundCartItem = shoppingCartProducts.find((product) => {
            return product.id === productIdShop;
        })
    }

    if(foundCartItem){
        alert("This is a unique product! You can add only one product of this type to the shopping cart!")
        return;
    };

    if(shoppingCartProducts){
        shoppingCartProducts.push(foundProduct);
        localStorage.setItem('products', JSON.stringify(shoppingCartProducts));
    } else {
        localStorage.setItem('products', JSON.stringify([foundProduct]));
    };
}

const cartItem = document.querySelector('.cart-items-list-line');
const cartItemsList = document.querySelectorAll('.cart-items');

function showItemsCart(){
    const products = JSON.parse(localStorage.getItem('products'));
    for(let i = 0; i < products.length; i++){
        const shopItemName = document.createElement('li');
        shopItemName.classList.add('cart-item-name');
        shopItemName.innerHTML = products[i].name;
        console.log(shopItemName)
        
        const shopItemPrice = document.createElement('li');
        shopItemPrice.classList.add('cart-item-price');
        shopItemPrice.innerHTML = products[i].price;
        console.log(shopItemPrice)

        cartItem.appendChild('shopItemName')
        cartItem.appendChild('shopItemPrice')
    }    
}
// de preluat prod din localStorage 
// pt fiecare prod trebuie pus in shopping cart 



























    // let btnShop = e.target;

    // let domainDetail = 'http://127.0.0.1:5500/';
    // let urlDetail = window.location.href;
    // urlDetail = urlDetail.replace(domainDetail, '');

    // for(let i = 0; i < productsArray.length; i++){
    //     let nameShop = productsArray[i].name;
    //     let priceShop = productsArray[i].price;
    //     let link = productsArray[i].links;

    //     if(urlDetail == link){
    //         const ulShop = document.createElement('ul');
    //         ulShop.classList.add('cart-items-list-line');

    //         const shopItemName = document.createElement('li');
    //         shopItemName.classList.add('cart-item-name');
    //         shopItemName.innerHTML = nameShop;
    //         console.log(shopItemName);

    //         const shopItemPrice = document.createElement('li');
    //         shopItemPrice.classList.add('cart-item-price');
    //         shopItemPrice.innerHTML = priceShop;
    //         console.log(shopItemPrice);


    //         const shopDeleteBtn = document.createElement('button');
    //         shopDeleteBtn.innerHTML = '<span class="material-symbols-outlined">delete</span>';
    //         shopDeleteBtn.style.backgroundColor = 'transparent';
    //         shopDeleteBtn.style.border = 'none';
    //         shopDeleteBtn.style.cursor = 'pointer';
    //         console.log(shopDeleteBtn);

    //         shopDeleteBtn.addEventListener('click', removeItem);
    
    //         function removeItem(e){
    //             const item = e.target.value;
    //             ulShop.remove(item);
    //         }

        
    //         ulShop.appendChild(shopItemName);
    //         ulShop.appendChild(shopItemPrice);
    //         ulShop.appendChild(shopDeleteBtn);
    //     }
        
    // }














    
    
//     deleteBtn.addEventListener('click', removeItem);
    
//     function removeItem(e){
//         const item = e.target.value;
//         li.remove(item);
//     }
      
// }