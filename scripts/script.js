function toggleBtn(){
    let menu = document.querySelector('.menu-box');

    if(menu.style.display == 'block'){
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}


let products = [
'Arnolfini Portrait', 
'Girl with a Pearl Earring', 
'Guernica', 
'Lady with an Ermine', 
'Mona Lisa', 
'Penitent Magdalene', 
'Starry Night', 
'The Basket of Apples', 
'The Boy in the Red Vest', 
'The Great Wave off Kanagawa', 
'The Night Café', 
'The Sleeping Gypsy', 
'The Storm on the Sea of Galilee', 
'The Swing', 
'Van Gogh self-portrait'];

function generateProduct(productName) {
    const product = document.createElement('div');
    product.classList.add('product');
    const paragraph = document.createElement('p');
    paragraph.textContent = productName;
    product.appendChild(paragraph);
    return product;
}

let productsContainer = document.querySelector('.search');
for (const productName of products){
    const product = generateProduct(productName);
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


