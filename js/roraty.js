let img = document.querySelector('#sportsman-img');
let imgP = document.querySelector('.img-box p');


function log() {
    img.setAttribute('style', 'transition: filter 1s linear; filter: blur(0); cursor: default;');
    imgP.setAttribute('style', 'font-size: 2rem;');
}

img.addEventListener('click', log);