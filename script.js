function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

const targetDate = new Date('February 9, 2025 00:00:00').getTime();

function updateTimer() {
    const now = new Date().getTime();
    const timeDifference = now - targetDate;

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateTimer, 1000);

updateTimer();
