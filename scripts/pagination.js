let pages = [
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

let domain = 'http://127.0.0.1:5500/';

let nextPageBtn = document.querySelector('.next-page');
nextPageBtn.addEventListener('click', nextPage);

function nextPage(e){
    let url = window.location.href;
    url = url.replace(domain, '');
    let currentPageIndex = pages.indexOf(url);
    if(currentPageIndex != pages.length - 1){
        window.location.href = domain + pages[currentPageIndex + 1];
    } else {
        nextPageBtn.style.opacity = '0.4';
    }

}

let prevPageBtn = document.querySelector('.prev-page');
prevPageBtn.addEventListener('click', prevPage);

function prevPage(e){
    let url = window.location.href;
    url = url.replace(domain, '');
    let currentPageIndex = pages.indexOf(url);
    if(currentPageIndex > 0){
        window.location.href = domain + pages[currentPageIndex - 1];
        prevPageBtn.style.opacity = '0.4';
    } 
  
}