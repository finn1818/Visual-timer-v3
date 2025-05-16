let timer = 2400;
let interval = null;
const timerDisplay = document.getElementById('timerDisplay');
const timerFill = document.getElementById('timerFill');
const pointsEl = document.getElementById('points');
const levelEl = document.getElementById('level');
const coinsEl = document.getElementById('coins');

function updateTimerDisplay() {
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;
    timerDisplay.textContent = \`\${minutes.toString().padStart(2, '0')}:\${seconds.toString().padStart(2, '0')}\`;
    timerFill.style.width = (timer / 2400 * 100) + '%';
}

document.getElementById('startButton').onclick = () => {
    if (interval) return;
    interval = setInterval(() => {
        if (timer > 0) {
            timer--;
            updateTimerDisplay();
        } else {
            clearInterval(interval);
            interval = null;
            // Level up logic
            pointsEl.textContent = parseInt(pointsEl.textContent) + 10;
            coinsEl.textContent = parseInt(coinsEl.textContent) + 1;
            if (parseInt(pointsEl.textContent) % 20 === 0) {
                levelEl.textContent = parseInt(levelEl.textContent) + 1;
            }
        }
    }, 1000);
};

document.getElementById('breakButton').onclick = () => {
    clearInterval(interval);
    interval = null;
    timer = 2400;
    updateTimerDisplay();
};

updateTimerDisplay();
