
document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');
  const classSelection = document.getElementById('classSelection');
  const classButtons = document.querySelectorAll('.classBtn');
  const progressContainer = document.getElementById('progressContainer');
  const stats = document.getElementById('stats');
  const breakBtn = document.getElementById('breakBtn');
  const timerEl = document.getElementById('timer');
  const progressFill = document.getElementById('progressFill');
  const pointsEl = document.getElementById('points');
  const levelEl = document.getElementById('level');
  const coinsEl = document.getElementById('coins');

  let totalTime = 2400;
  let remainingTime = totalTime;
  let timerInterval = null;
  let decisionPromptShown = false;
  let breaksLeft = 3;
  let points = 0;
  let level = 1;
  let coins = 0;

  function startTimer() {
    timerInterval = setInterval(() => {
      remainingTime--;
      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        alert("Class session completed!");
        return;
      }
      updateTimerDisplay();
      updateProgressBar();
      // After 15 minutes of class (i.e., remainingTime == totalTime - 900)
      if (!decisionPromptShown && remainingTime === totalTime - 900) {
        decisionPromptShown = true;
        let stay = confirm("You've made it 15 minutes! Stay for +10 pts or leave for +5?");
        if (stay) {
          addPoints(10);
          alert("You stayed and earned 10 points!");
        } else {
          addPoints(5);
          alert("You left early and earned 5 points.");
          clearInterval(timerInterval);
          return;
        }
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    let min = Math.floor(remainingTime / 60);
    let sec = remainingTime % 60;
    if (sec < 10) sec = "0" + sec;
    if (min < 10) min = "0" + min;
    timerEl.textContent = min + ":" + sec;
  }

  function updateProgressBar() {
    let percent = (remainingTime / totalTime) * 100;
    progressFill.style.width = percent + "%";
  }

  function addPoints(n) {
    points += n;
    pointsEl.textContent = points;
    checkLevelUp();
  }

  function checkLevelUp() {
    let threshold = level * 10;
    while (points >= threshold) {
      points -= threshold;
      level++;
      coins++;
      threshold = level * 10;
    }
    levelEl.textContent = level;
    coinsEl.textContent = coins;
    pointsEl.textContent = points;
  }

  startBtn.addEventListener('click', () => {
    startBtn.style.display = 'none';
    classSelection.style.display = 'block';
  });

  classButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      classSelection.style.display = 'none';
      progressContainer.style.display = 'flex';
      stats.style.display = 'flex';
      breakBtn.style.display = 'block';
      updateTimerDisplay();
      startTimer();
    });
  });

  breakBtn.addEventListener('click', () => {
    if (breaksLeft <= 0) return;
    clearInterval(timerInterval);
    breakBtn.style.opacity = '0.5';
    breakBtn.style.pointerEvents = 'none';
    alert("Starting break for 1 minute!");
    setTimeout(() => {
      breaksLeft--;
      alert("Break over! Back to class.");
      startTimer();
      if (breaksLeft > 0) {
        breakBtn.style.opacity = '1';
        breakBtn.style.pointerEvents = 'auto';
      }
    }, 60000);
  });
});
