const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const colors = ['red 100%', '#e74c3c 47%', 'green 0%', '#e67e22', 'blue', '#2ecc71', 'white', 'purple', 'yellow', 'green', '#72fc01 69%',
'#0105fc 43%', '#a217ff 85%', '#10fabf 48%', '#fc01bd 15%', '#fcac01 35%', '#1ca8f8 77%', '#2f01fc', '#a0226c', '#4a7e61 21%'];

let time = 0;
let score = 0;

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', e => {
    if (e.target.classList.contains('time-btn')) {
        time = parseInt(e.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    };
});
board.addEventListener('click', e => {
    if (e.target.classList.contains('circle')) {
        score++;
        e.target.remove();
        createRandomCircle();
    }
});

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
};

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }
        setTime(current);
    }
};

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
};

function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Cчет: <span class="primary">${score}</span></h1>`;
};

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
    const color = getRandomColor();

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.background = color;

    board.append(circle);
};

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
};
