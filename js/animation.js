const start = document.getElementById('start');
const intro = document.getElementById('intro');
const introText = document.querySelector('#intro p');
const music = document.getElementById('music');
const mainWrapper = document.getElementById('main-wrapper');
const logoWrapper = document.getElementById('logo-wrapper');
const hr = document.getElementById('border-top');
const hrLeft = document.getElementById('left');
const hrRight = document.getElementById('right');

//
// functions
//

function createLetter(letter) {
    // create the letter
    const el = document.createElement('h1');
    el.innerHTML = letter.letter;
    el.style.fontSize = letter.fontSize;
    el.style.marginLeft = letter.offsetX;
    el.style.marginTop = letter.offsetY;
    // animate the letter
    anime({
        targets: el,
        translateX: letter.translateX,
        translateY: letter.translateY,
        scale: letter.scale,
        rotate: letter.rotate,
        opacity: [letter.startingOpacity, letter.opacity],
        easing: 'easeOutQuad',
        duration: letter.transitionDuration
    });
    document.body.appendChild(el);
    // delete the letter
    setTimeout(() => {
        el.remove();
    }, letter.deleteAfter);
}

function moveLetter(letter) {
    // move an existing letter
    anime({
        targets: document.getElementById(letter.id),
        translateX: [letter.offsetX, 0],
        translateY: [letter.offsetY, 0],
        scale: [letter.scaleFrom, letter.scaleTo],
        opacity: [letter.startingOpacity, letter.opacity],
        easing: 'easeOutQuad',
        duration: letter.transitionDuration
    });
}

function playTitleSequence() {
    // fade out intro
    moveLetter({id: 'intro', offsetX: 0, offsetY: 0, scaleFrom: 1, scaleTo: 1, startingOpacity: 1,opacity: 0, transitionDuration: 2000});
    // hide intro
    setTimeout(() => {intro.style.display = 'none'; mainWrapper.style.display = 'none';}, 2000);
    // queue the music...
    music.play();
    // A - 3000ms
    setTimeout(() => {createLetter({letter: 'A', offsetX: '24.5%', offsetY: '30%', fontSize: '800vw', translateX: 0, translateY: 0, scale: 0.75, rotate: 0, startingOpacity: 1, opacity: 1, transitionDuration: 8550, deleteAfter: 5700});}, 2800);
    // N - 8000ms
    setTimeout(() => {createLetter({letter: 'N', offsetX: '-10%', offsetY: 0, fontSize: '185vw', translateX: 0, translateY: 300, scale: 0.90, rotate: 0, startingOpacity: 1, opacity: 1, transitionDuration: 4000, deleteAfter: 2500});}, 8500);
    // RI - 11000ms
    setTimeout(() => {createLetter({letter: 'R', offsetX: '-50%', offsetY: '26%', fontSize: '175vw', translateX: -200, translateY: 300, scale: 0.95, rotate: 0, startingOpacity: 1, opacity: 1, transitionDuration: 4500, deleteAfter: 3000});}, 11000);
    setTimeout(() => {createLetter({letter: 'I', offsetX: '50%', offsetY: '-20%', fontSize: '175vw', translateX: 200, translateY: 300, scale: 0.95, rotate: 0, startingOpacity: 1, opacity: 1, transitionDuration: 4500, deleteAfter: 3000});}, 11000);
    // SG - 14000ms
    setTimeout(() => {createLetter({letter: 'S', offsetX: '10%', offsetY: '50%', fontSize: '120vw', translateX: -20, translateY: -30, scale: 0.90, rotate: -15, startingOpacity: 1, opacity: 1, transitionDuration: 5500, deleteAfter: 3000});}, 14000);
    setTimeout(() => {createLetter({letter: 'G', offsetX: '10%', offsetY: '-55%', fontSize: '120vw', translateX: 5, translateY: -15, scale: 0.90, rotate: -35, startingOpacity: 1, opacity: 1, transitionDuration: 5500, deleteAfter: 3000});}, 14000);
    // SR - 17000ms
    setTimeout(() => {createLetter({letter: 'S', offsetX: '20%', offsetY: '40%', fontSize: '150vw', translateX: -75, translateY: -150, scale: 0.90, rotate: 0, startingOpacity: 1, opacity: 1, transitionDuration: 4200, deleteAfter: 2800});}, 17000);
    setTimeout(() => {createLetter({letter: 'R', offsetX: '-85%', offsetY: '15%', fontSize: '150vw', translateX: 100, translateY: -75, scale: 0.90, rotate: 0, startingOpacity: 1, opacity: 1, transitionDuration: 4200, deleteAfter: 2800});}, 17000);
    // TART - 19000ms
    setTimeout(() => {createLetter({letter: 'T', offsetX: '-25%', offsetY: '-55%', fontSize: '100vw', translateX: -150, translateY: 80, scale: 1, rotate: 0, startingOpacity: 1, opacity: 0, transitionDuration: 8000, deleteAfter: 6000});}, 19800);
    setTimeout(() => {createLetter({letter: 'A', offsetX: '60%', offsetY: '-55%', fontSize: '100vw', translateX: 150, translateY: 80, scale: 1, rotate: 0, startingOpacity: 1, opacity: 0, transitionDuration: 8000, deleteAfter: 6000});}, 19800);
    setTimeout(() => {createLetter({letter: 'R', offsetX: '60%', offsetY: '45%', fontSize: '100vw', translateX: -150, translateY: 80, scale: 1, rotate: 0, startingOpacity: 1, opacity: 0, transitionDuration: 8000, deleteAfter: 6000});}, 19800);
    setTimeout(() => {createLetter({letter: 'T', offsetX: '-40%', offsetY: '45%', fontSize: '100vw', translateX: 150, translateY: 80, scale: 1, rotate: 0, startingOpacity: 1, opacity: 0, transitionDuration: 8000, deleteAfter: 6000});}, 19800);
    // NG - 21000ms
    setTimeout(() => {createLetter({letter: 'N', offsetX: '-25%', offsetY: 0, fontSize: '30vw', translateX: 150, translateY: 0, scale: 1, rotate: 0, startingOpacity: 0, opacity: 1, transitionDuration: 6750, deleteAfter: 4500});}, 21000);
    setTimeout(() => {createLetter({letter: 'G', offsetX: '25%', offsetY: 0, fontSize: '30vw', translateX: -150, translateY: 0, scale: 1, rotate: 0, startingOpacity: 0, opacity: 1, transitionDuration: 6750, deleteAfter: 4500});}, 21000);
    // all letters - 25500ms
    setTimeout(() => {
        mainWrapper.style.display = 'block';
        logoWrapper.className = 'scale-down';
        moveLetter({id: 'a', offsetX: '-25%', offsetY: 0, scaleFrom: 1, scaleTo: 1, startingOpacity: 1, opacity: 1, transitionDuration: 12000});
        moveLetter({id: 'n', offsetX: '25%', offsetY: 0, scaleFrom: 1, scaleTo: 1, startingOpacity: 1, opacity: 1, transitionDuration: 12000});
        moveLetter({id: 'g', offsetX: '50%', offsetY: 0, scaleFrom: 1, scaleTo: 1, startingOpacity: 1, opacity: 1, transitionDuration: 12000});
        moveLetter({id: 'i', offsetX: '-35%', offsetY: 0, scaleFrom: 1, scaleTo: 1, startingOpacity: 1, opacity: 1, transitionDuration: 12000});
        moveLetter({id: 'g2', offsetX: '25%', offsetY: 0, scaleFrom: 1, scaleTo: 1, startingOpacity: 1, opacity: 1, transitionDuration: 12000});
        moveLetter({id: 'r', offsetX: '-75%', offsetY: 0, scaleFrom: 1, scaleTo: 1, startingOpacity: 1, opacity: 1, transitionDuration: 12000});
        moveLetter({id: 'n2', offsetX: 0, offsetY: '100%', scaleFrom: 1, scaleTo: 1, startingOpacity: 1, opacity: 1, transitionDuration: 8000});
        moveLetter({id: 't2', offsetX: '-100%', offsetY: 0, scaleFrom: 1, scaleTo: 1, startingOpacity: 1, opacity: 1, transitionDuration: 12000});
        moveLetter({id: 't', offsetX: 0, offsetY: '-150%', scaleFrom: 1, scaleTo: 1, startingOpacity: 1, opacity: 1, transitionDuration: 12000});
        moveLetter({id: 'h', offsetX: 0, offsetY: '200%', scaleFrom: 1, scaleTo: 1, startingOpacity: 1, opacity: 1, transitionDuration: 12000});
        moveLetter({id: 's2', offsetX: 0, offsetY: '150%', scaleFrom: 1, scaleTo: 1, startingOpacity: 1, opacity: 1, transitionDuration: 12000});
        moveLetter({id: 'e', offsetX: 0, offsetY: '-125%', scaleFrom: 1, scaleTo: 1, startingOpacity: 1, opacity: 1, transitionDuration: 12000});
        moveLetter({id: 's', offsetX: '-300%', offsetY: 0, scaleFrom: 1, scaleTo: 1, startingOpacity: 1, opacity: 1, transitionDuration: 12000});
        moveLetter({id: 'r2', offsetX: '300%', offsetY: 0, scaleFrom: 1, scaleTo: 1, startingOpacity: 1, opacity: 1, transitionDuration: 12000});
    }, 25500);
    // show horizontal rules - 38800ms
    setTimeout(() => {
        hr.className += 'active';

        setTimeout(() => {
            hrLeft.className += ' active';
            hrRight.className += ' active';
        }, 700);
    }, 39800);
    // fade out all letters - 45000
    setTimeout(() => {moveLetter({id: 'main-wrapper', offsetX: 0, offsetY: 0, scaleFrom: 1, scaleTo: 1, startingOpacity: 1, opacity: 0, transitionDuration: 5000});}, 45000);
    // bring the intro back - 51000
    setTimeout(() => {
        mainWrapper.style.display = 'none';
        intro.style.display = 'block';
        introText.innerHTML = `
            Created by <a href="http://ryanabraham.net">Ryan Abraham</a>.<br />
            See the code on <a href="https://github.com/ryanwabraham/strangerthings">Github</a>.`
        ;
        moveLetter({id: 'intro', offsetX: 0, offsetY: 0, scaleFrom: 1, scaleTo: 1, startingOpacity: 1,opacity: 1, transitionDuration: 2000});
        resetState();
    }, 51000);
}

function resetState() {
    logoWrapper.className = '';
    logoWrapper.removeAttribute('style');
    mainWrapper.removeAttribute('style');
    mainWrapper.style.display = 'none';
    hr.classList.remove('active');
    hrLeft.classList.remove('active');
    hrRight.classList.remove('active');
}

//
// event listeners
//

start.addEventListener("click", function() {
    playTitleSequence();
});
