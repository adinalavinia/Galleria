let products = [
    'Starry Night', 
    'Girl with a Pearl Earring', 
    'Guernica', 
    'Penitent Magdalene', 
    'The Storm on the Sea of Galilee', 
    'The Great Wave off Kanagawa', 
    'Van Gogh self-portrait',
    'The Sleeping Gypsy', 
    'Lady with an Ermine', 
    'The Night Café', 
    'The Basket of Apples', 
    'The Boy in the Red Vest', 
    'Arnolfini Portrait', 
    'Mona Lisa', 
    'The Swing'
];

let pagesSearch = [
    'starry-night.html',
    'girl-with-a-pearl-earring.html',
    'guernica.html',
    'penitent-magdalene.html',
    'the-storm-on-the-sea-of-galilee.html',
    'the-great-wave-off-kanagawa.html',
    'van-gogh-self-portrait.html',
    'the-sleeping-gypsy.html',
    'lady-with-an-ermine.html',
    'the-night-cafe.html',
    'the-basket-of-apples.html',
    'the-boy-in-the-red-vest.html',
    'arnolfini-portrait.html',
    'mona-lisa.html',
    'the-swing.html'
];


let index = 0;
function generateProduct(productName) {
    const aTag = document.createElement('a');
    aTag.innerHTML = products[index];
    aTag.href = pagesSearch[index] ;    

    const productLi = document.createElement('li');
    productLi.classList.add('name-product');
    productLi.style.display = 'none';
    productLi.appendChild(aTag);

    return productLi;
}
const ul = document.querySelector('.product-list');
ul.style.border = 'none';

for (const productName of products){
    const product = generateProduct(productName);
    ul.appendChild(product);
    index++;
}

const searchInput = document.querySelector('.search-input');
const renderedProducts = document.querySelectorAll('.name-product');
searchInput.addEventListener('keyup', (event) => {
    const inputValue = searchInput.value;
    
    for( const product of renderedProducts){
        const a = product.querySelector('a');
        const productName = a.innerHTML;
    
        if(productName.toLowerCase().startsWith(inputValue.toLowerCase())){
            product.style.display = 'flex';
            ul.style.border = '1px solid grey';
        } else {
            product.style.display = 'none';
        }

        if(inputValue == ''){
            product.style.display = 'none';
        }
    }
})



