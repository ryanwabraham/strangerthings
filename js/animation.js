var start = document.getElementById('start'),
	intro = document.getElementById('intro'),
	introText = document.querySelector('#intro p'),
	music = document.getElementById('music'),
	mainWrapper = document.getElementById('main-wrapper'),
	logoWrapper = document.getElementById('logo-wrapper'),
	hr = document.getElementById('border-top'),
	hrLeft = document.getElementById('left'),
	hrRight = document.getElementById('right');

start.addEventListener("click", function() {
	playAnimation();
	setTimeout(function() {
		intro.style.display = 'none';
		mainWrapper.style.display = 'none';
	}, 2000);
});

function playAnimation() {
	moveLetter('intro', 0, 0, 1, 1, 1, 0, 2000);
	music.play();
	//A - 3000ms
	setTimeout(function() {createLetter('A', '24.5%', '30%', '800vw', 0, 0, .75, 0, 1, 1, 8550, 5700)}, 2800);
	// N - 8000ms
	setTimeout(function() {createLetter('N', '-10%', 0, '185vw', 0, 300, .90, 0, 1, 1, 4000, 2500)}, 8500);
	// RI - 11000ms
	setTimeout(function() {createLetter('R', '-50%', '26%', '175vw', -200, 300, .95, 0, 1, 1, 4500, 3000)}, 11000);
	setTimeout(function() {createLetter('I', '50%', '-20%', '175vw', 200, 300, .95, 0, 1, 1, 4500, 3000)}, 11000);
	// SG - 14000ms
	setTimeout(function() {createLetter('S', '10%', '50%', '120vw', -20, -30, .90, -15, 1, 1, 5500, 3000)}, 14000);
	setTimeout(function() {createLetter('G', '10%', '-55%', '120vw', 5, -15, .90, -35, 1, 1, 5500, 3000)}, 14000);
	//SR - 17000ms
	setTimeout(function() {createLetter('S', '20%', '40%', '150vw', -75, -150, .90, 0, 1, 1, 4200, 2800)}, 17000);
	setTimeout(function() {createLetter('R', '-85%', '15%', '150vw', 100, -75, .90, 0, 1, 1, 4200, 2800)}, 17000);
	//TART - 19000ms
	setTimeout(function() {createLetter('T', '-25%', '-55%', '100vw', -150, 80, 1, 0, 1, 0, 8000, 6000)}, 19800);
	setTimeout(function() {createLetter('A', '60%', '-55%', '100vw', 150, 80, 1, 0, 1, 0, 8000, 6000)}, 19800);
	setTimeout(function() {createLetter('R', '60%', '45%', '100vw', -150, 80, 1, 0, 1, 0, 8000, 6000)}, 19800);
	setTimeout(function() {createLetter('T', '-40%', '45%', '100vw', 150, 80, 1, 0, 1, 0, 8000, 6000)}, 19800);
	//NG - 21000ms
	setTimeout(function() {createLetter('N', '-25%', 0, '30vw', 150, 0, 1, 0, 0, 1, 6750, 4500)}, 21000);
	setTimeout(function() {createLetter('G', '25%', 0, '30vw', -150, 0, 1, 0, 0, 1, 6750, 4500)}, 21000);
	//All letters - 25500ms
	setTimeout(function() {
		mainWrapper.style.display = 'block';
		logoWrapper.className = 'scale-down';
		moveLetter('a', '-25%', 0, 1, 1, 1, 1, 12000);
		moveLetter('n', '25%', 0, 1, 1, 1, 1, 12000);
		moveLetter('g', '50%', 0, 1, 1, 1, 1, 12000);
		moveLetter('i', '-35%', 0, 1, 1, 1, 1, 12000);
		moveLetter('g2', '25%', 0, 1, 1, 1, 1, 12000);
		moveLetter('r', '-75%', 0, 1, 1, 1, 1, 12000);
		moveLetter('n2', 0, '100%', 1, 1, 1, 1, 8000);
		moveLetter('t2', '-100%', 0, 1, 1, 1, 1, 12000);
		moveLetter('t', 0, '-150%', 1, 1, 1, 1, 12000);
		moveLetter('h', 0, '200%', 1, 1, 1, 1, 12000);
		moveLetter('s2', 0, '150%', 1, 1, 1, 1, 12000);
		moveLetter('e', 0, '-125%', 1, 1, 1, 1, 12000);
		moveLetter('s', '-300%', 0, 1, 1, 1, 1, 12000);
		moveLetter('r2', '300%', 0, 1, 1, 1, 1, 12000);
	}, 25500);
	//Show hrs - 38800ms
	setTimeout(function() {
		hr.className += 'active';

		setTimeout(function() {
			hrLeft.className += ' active';
			hrRight.className += ' active';
		}, 700);
	}, 39800);
	//Fade out - 45000
	setTimeout(function() {
		moveLetter('main-wrapper', 0, 0, 1, 1, 1, 0, 5000);
	}, 45000);
	//Bring back the intro - 51000
	setTimeout(function() {
		mainWrapper.style.display = 'none';
		intro.style.display = 'block';
		start.innerText = 'Play Again';
		introText.innerHTML = 'Created by <a href="http://ryanabraham.net">Ryan Abraham</a>.<br />See the code on <a href="https://github.com/ryanwabraham/strangerthings">Github</a>.';
		moveLetter('intro', 0, 0, 1, 1, 1, 1, 2000);
		resetState();
	}, 51000);

	function createLetter(letter, offsetX, offsetY, fontSize, translateX, translateY, scale, rotate, startingOpacity, opacity, transitionDuration, deleteAfter) {
		var el = document.createElement('h1');
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

		setTimeout(function() {
			el.remove();
		}, deleteAfter);
	}

	function moveLetter(id, offsetX, offsetY, scaleFrom, scaleTo, startingOpacity, opacity, transitionDuration) {
		var el = document.getElementById(id);

		anime({
			targets: el,
			translateX: [offsetX, 0],
			translateY: [offsetY, 0],
			scale: [scaleFrom, scaleTo],
			opacity: [startingOpacity, opacity],
			easing: 'easeOutQuad',
			duration: transitionDuration
		});
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
}
