let seconds = 2400;
let timer;
const display = document.getElementById('time-display');
const fill = document.getElementById('progress-fill');

function updateTime() {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  display.textContent = \`\${min.toString().padStart(2, '0')}:\${sec.toString().padStart(2, '0')}\`;
  fill.style.width = ((seconds / 2400) * 100) + '%';
}

document.getElementById('start-btn').addEventListener('click', () => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (seconds > 0) {
      seconds--;
      updateTime();
    }
  }, 1000);
});

updateTime();
