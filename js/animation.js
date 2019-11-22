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

function createLetter(letter, offsetX, offsetY, fontSize, translateX, translateY, scale, rotate, startingOpacity, opacity, transitionDuration, deleteAfter) {
    const el = document.createElement('h1');
    el.innerHTML = letter;
    el.style.fontSize = fontSize;
    el.style.marginLeft = offsetX;
    el.style.marginTop = offsetY;

    anime({
        targets: el,
        translateX: translateX,
        translateY: translateY,
        scale: scale,
        rotate: rotate,
        opacity: [startingOpacity, opacity],
        easing: 'easeOutQuad',
        duration: transitionDuration
    });

    document.body.appendChild(el);
    setTimeout(() => {
        el.remove();
    }, deleteAfter);
}

function moveLetter(letter) {
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
    // Fade out intro screen
    moveLetter({id: 'intro', offsetX: 0, offsetY: 0, scaleFrom: 1, scaleTo: 1, startingOpacity: 1,opacity: 0, transitionDuration: 2000});
    music.play();
    // A - 3000ms
    setTimeout(() => {createLetter('A', '24.5%', '30%', '800vw', 0, 0, 0.75, 0, 1, 1, 8550, 5700);}, 2800);
    // N - 8000ms
    setTimeout(() => {createLetter('N', '-10%', 0, '185vw', 0, 300, 0.90, 0, 1, 1, 4000, 2500);}, 8500);
    // RI - 11000ms
    setTimeout(() => {createLetter('R', '-50%', '26%', '175vw', -200, 300, 0.95, 0, 1, 1, 4500, 3000);}, 11000);
    setTimeout(() => {createLetter('I', '50%', '-20%', '175vw', 200, 300, 0.95, 0, 1, 1, 4500, 3000);}, 11000);
    // SG - 14000ms
    setTimeout(() => {createLetter('S', '10%', '50%', '120vw', -20, -30, 0.90, -15, 1, 1, 5500, 3000);}, 14000);
    setTimeout(() => {createLetter('G', '10%', '-55%', '120vw', 5, -15, 0.90, -35, 1, 1, 5500, 3000);}, 14000);
    // SR - 17000ms
    setTimeout(() => {createLetter('S', '20%', '40%', '150vw', -75, -150, 0.90, 0, 1, 1, 4200, 2800);}, 17000);
    setTimeout(() => {createLetter('R', '-85%', '15%', '150vw', 100, -75, 0.90, 0, 1, 1, 4200, 2800);}, 17000);
    // TART - 19000ms
    setTimeout(() => {createLetter('T', '-25%', '-55%', '100vw', -150, 80, 1, 0, 1, 0, 8000, 6000);}, 19800);
    setTimeout(() => {createLetter('A', '60%', '-55%', '100vw', 150, 80, 1, 0, 1, 0, 8000, 6000);}, 19800);
    setTimeout(() => {createLetter('R', '60%', '45%', '100vw', -150, 80, 1, 0, 1, 0, 8000, 6000);}, 19800);
    setTimeout(() => {createLetter('T', '-40%', '45%', '100vw', 150, 80, 1, 0, 1, 0, 8000, 6000);}, 19800);
    // NG - 21000ms
    setTimeout(() => {createLetter('N', '-25%', 0, '30vw', 150, 0, 1, 0, 0, 1, 6750, 4500);}, 21000);
    setTimeout(() => {createLetter('G', '25%', 0, '30vw', -150, 0, 1, 0, 0, 1, 6750, 4500);}, 21000);
    // All letters - 25500ms
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
    // Show horizontal rules - 38800ms
    setTimeout(() => {
        hr.className += 'active';

        setTimeout(() => {
            hrLeft.className += ' active';
            hrRight.className += ' active';
        }, 700);
    }, 39800);
    // Fade out - 45000
    setTimeout(() => {
        moveLetter({id: 'main-wrapper', offsetX: 0, offsetY: 0, scaleFrom: 1, scaleTo: 1, startingOpacity: 1, opacity: 0, transitionDuration: 5000});
    }, 45000);
    // Bring back the intro - 51000
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
    setTimeout(() => {
        intro.style.display = 'none';
        mainWrapper.style.display = 'none';
    }, 2000);
});
