let img = document.querySelector('#sportsman-img');
let showVideo = document.querySelector('.show-video');
let closeVideo = document.querySelector('.video-box p');
let videoBox = document.querySelector('.video-box')


function setAttr() {
    img.setAttribute('style', 'transition: filter 1s linear; filter: blur(0); cursor: default;');
    console.log('tutaj');
}

function close() {
    videoBox.setAttribute('style', 'transition: height .9s ease-in-out, box-shadow .1s .9s; height: 0; box-shadow: none;');
    closeVideo.setAttribute('style', 'display: none;');
} 

function show() {
    videoBox.setAttribute('style', 'transition: height .9s ease-in-out, box-shadow .1s; height: 80%; box-shadow: 0 0 600px 150px #000;');
    closeVideo.setAttribute('style', 'display: block;');
}

img.addEventListener('click', setAttr);
closeVideo.addEventListener('click', close);
showVideo.addEventListener('click', show);