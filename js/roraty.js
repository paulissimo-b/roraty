let img = document.querySelector('#sportsman-img');
let showVideo = document.querySelector('.show-video');
let closeVideo = document.querySelector('.video-box p');
let videoBox = document.querySelector('.video-box');

let firstLetter1 = document.querySelector('.slogan-1 .first-letter');
let call1 = document.querySelector('.slogan-1 .call');
let desc1 = document.querySelector('.slogan-1 .description');

let firstLetter2 = document.querySelector('.slogan-2 .first-letter');
let call2 = document.querySelector('.slogan-2 .call');
let desc2 = document.querySelector('.slogan-2 .description');

let firstLetter3 = document.querySelector('.slogan-3 .first-letter');
let call3 = document.querySelector('.slogan-3 .call');
let desc3 = document.querySelector('.slogan-3 .description');

let song1 = document.querySelector('.song-1');
let song2 = document.querySelector('.song-2');
let song3 = document.querySelector('.song-3');
let song4 = document.querySelector('.song-4');
let song5 = document.querySelector('.song-5');
let songX = document.querySelector('.song-X');


let lyrics = document.querySelector('#lyrics p');
let stanza1 = document.querySelector('.stanza-1');
let stanza2 = document.querySelector('.stanza-2');
let stanza3 = document.querySelector('.stanza-3');
let song2_1 = document.querySelector('#s2-1');
let song2_2 = document.querySelector('#s2-2');
let song2_r = document.querySelector('#s2-r');
let song5_1 = document.querySelector('#s5-1');
let song5_r = document.querySelector('#s5-r');


function showCall1() {
    call1.setAttribute('style', 'width: auto;');
    firstLetter1.setAttribute('style', 'cursor: auto');
}

function showDesc1() {
    desc1.setAttribute('style','width: auto;');
    call1.setAttribute('style', 'width: auto; cursor: auto;');
}

firstLetter1.addEventListener('click', showCall1);
call1.addEventListener('click', showDesc1);


function showCall2() {
    call2.setAttribute('style', 'width: auto;');
    firstLetter2.setAttribute('style', 'cursor: auto;');
}

function showDesc2() {
    desc2.setAttribute('style', 'width: auto;');
    call2.setAttribute('style', 'width: auto; cursor: auto;');
}

firstLetter2.addEventListener('click', showCall2);
call2.addEventListener('click', showDesc2);


function showCall3() {
    call3.setAttribute('style', 'width: auto;');
    firstLetter3.setAttribute('style', 'cursor: auto;');
}

function showDesc3() {
    desc3.setAttribute('style', 'width: auto;');
    call3.setAttribute('style', 'width: auto; cursor: auto;');
}

firstLetter3.addEventListener('click', showCall3);
call3.addEventListener('click', showDesc3);



function setAttr() {
    img.setAttribute('style', 'transition: filter 1s linear; filter: blur(0); cursor: default;');
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

function showStanza1() {
    stanza1.setAttribute('style', 'display: flex');
}

function hideStanza1() {
    stanza1.setAttribute('style', 'display: none');
}

function showStanza2() {
    stanza2.setAttribute('style', 'display: flex');
}

function hideStanza2() {
    stanza2.setAttribute('style', 'display: none');
}

function showStanza3() {
    stanza3.setAttribute('style', 'display: flex');
}

function hideStanza3() {
    stanza3.setAttribute('style', 'display: none');
}



function write_1() {
    lyrics.innerHTML = 'Ci, co zaufali Panu, odzyskują siły,<br>Otrzymują skrzydła jak orły,<br>biegną bez zmęczenia.';
}

function write_2_1() {
    lyrics.innerHTML = '1. Jezus daje nam zbawienie,<br>Jezus daje pokój nam,<br>Jemu składam dziękczynienie,<br>Chwałę z serca mego dam.';
}

function write_2_2() {
    lyrics.innerHTML = '2. W Jego ranach uzdrowienie,<br>w Jego śmierci życia dar,<br>Jego krew to oczyszczenie,<br>Jego życie chwałą nam.';
}

function write_2_r() {
    lyrics.innerHTML = 'Ref. Jezus siłą mą,<br>Jezus pieśnią mego życia,<br>Królem wiecznym On,<br>niepojęty w mocy swej,<br>W Nim znalazłem to,<br>czego szukałem do dzisiaj,<br>Sam mi podał dłoń,<br>bym zwyciężał w każdy dzień.';
}

function write_3() {
    lyrics.innerHTML = 'Ole, ole, ole!<br>Jesteśmy tu! Kochamy Cię!';
}

function write_4() {
    lyrics.innerHTML = 'Józefie stajenki nie szukaj<br>i do gospody nie pukaj<br>Z Maryją do nas przyjdź!<br><br>/: Przynieście ze sobą Dziecinę,<br>jest miejsce w naszej rodzinie<br>dla Boga u nas zawsze otwarte drzwi! :/';
}

function write_5_1() {
    lyrics.innerHTML = 'Gdy adwentowy wieczór nadchodzi,<br>posłuchaj słychać krok.<br>Para wędrowców do nas przychodzi,<br>poprzez zimowy zmrok.';
}

function write_5_r() {
    lyrics.innerHTML = 'Ref. Od drzwi, do drzwi<br>stuka, puka<br>i schronienia szuka.<br>Czy wiesz kto,<br>przyszedł tu?<br>Otwórz, otwórz, otwórz mu!';
}

function writeBlank() {
    lyrics.innerHTML = '';
}

song1.addEventListener('click', hideStanza1);
song1.addEventListener('click', hideStanza2);
song1.addEventListener('click', showStanza3);
song1.addEventListener('click', write_1);

song2.addEventListener('click', showStanza1);
song2.addEventListener('click', hideStanza2);
song2.addEventListener('click', hideStanza3);
song2.addEventListener('click', write_2_1);
song2_1.addEventListener('click', write_2_1);
song2_2.addEventListener('click', write_2_2);
song2_r.addEventListener('click', write_2_r);

song3.addEventListener('click', hideStanza1);
song3.addEventListener('click', hideStanza2);
song3.addEventListener('click', hideStanza3);
song3.addEventListener('click', write_3);

song4.addEventListener('click', hideStanza1);
song4.addEventListener('click', hideStanza2);
song4.addEventListener('click', hideStanza3);
song4.addEventListener('click', write_4);

song5.addEventListener('click', hideStanza1);
song5.addEventListener('click', showStanza2);
song5.addEventListener('click', hideStanza3);
song5.addEventListener('click', write_5_1);
song5_1.addEventListener('click', write_5_1);
song5_r.addEventListener('click', write_5_r);

songX.addEventListener('click', hideStanza1);
songX.addEventListener('click', hideStanza2);
songX.addEventListener('click', hideStanza3);
songX.addEventListener('click', writeBlank);