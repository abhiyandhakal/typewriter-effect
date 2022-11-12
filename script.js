const typingText = document.getElementById('typing-text');

const phrase = 'Hello, I am Abhiyan Dhakal';

let i = 0;
let isCompleted = false;
let partPhrase = '';
let speed = 100;
let isEnd = true;

function checkEnd() {
	if (isEnd) {
		speed = 2000;
		isEnd = false;
	} else speed = 100;
}

function loop() {
	isEnd = false;

	if (i < phrase.length && !isCompleted) {
		i++;
		partPhrase = phrase.slice(0, i + 1) + '|';

		if (i === phrase.length) isEnd = true;
	} else if (i >= 0) {
		isCompleted = true;
		i--;
		partPhrase = phrase.slice(0, i + 1) + '|';
	} else {
		isCompleted = false;
		i++;
		isEnd = true;
	}

	typingText.innerText = partPhrase;

	checkEnd();

	setTimeout(loop, speed);
}

loop();
