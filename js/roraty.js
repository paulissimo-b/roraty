let img = document.querySelector('#sportsman-img');


function log() {
    img.setAttribute('style', 'transition: filter 1s linear; filter: blur(0);');
}

img.addEventListener('click', log);