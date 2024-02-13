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

function generateProduct(productName, index) {
    const product = document.createElement('div');
    product.classList.add('product');

    const paragraph = document.createElement('p');
    paragraph.textContent = productName + ';';
    // paragraph.textContent = "<a href='" + pagesSearch[index] + "'></a>" + productName;
    
    product.appendChild(paragraph);

    return product;
}

const productsContainer = document.querySelector('.search');
for (const productName of products){
    const product = generateProduct(productName, index);
    productsContainer.appendChild(product);
    
}

const searchInput = document.querySelector('.search-input');
const renderedProducts = productsContainer.querySelectorAll('.product');
searchInput.addEventListener('keyup', (event) => {
    const inputValue = searchInput.value;
    
    for( const product of renderedProducts){
        const p = product.querySelector('p');
        const productName = p.textContent;
    
        if(productName.toLowerCase().startsWith(inputValue.toLowerCase())){
            product.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }

        if(inputValue == ''){
            product.style.display = 'none';
        }
    }
})


