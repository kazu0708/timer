document.addEventListener('DOMContentLoaded', () => {
    const hour = document.getElementById("hourtext");
    const min = document.getElementById("minutetext");
    const sec = document.getElementById("secondtext");
    const hdown = document.getElementById('hourdownbutton');
    const hup = document.getElementById('hourupbutton');
    const mdown = document.getElementById('minutedownbutton');
    const mup = document.getElementById('minuteupbutton');
    const sdown = document.getElementById('seconddownbutton');
    const sup = document.getElementById('secondupbutton');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');
    const startAudio = new Audio('Start.mp3');

    hdown.addEventListener('click', () => {
        let hours = parseInt(hour.value) || 0;
        if (hours > 0) {
            hours -= 1;
        }
        hour.value = hours.toString().padStart(2, '0');
    });

    hup.addEventListener('click', () => {
        let hours = parseInt(hour.value) || 0;
        hours += 1;
        hour.value = hours.toString().padStart(2, '0');
    });

    mdown.addEventListener('click', () => {
        let minutes = parseInt(min.value) || 0;
        if (minutes > 0) {
            minutes -= 1;
        }
        min.value = minutes.toString().padStart(2, '0');
    });

    mup.addEventListener('click', () => {
        let minutes = parseInt(min.value) || 0;
        minutes += 1;
        min.value = minutes.toString().padStart(2, '0');
    });

    sdown.addEventListener('click', () => {
        let seconds = parseInt(sec.value) || 0;
        if (seconds > 0) {
            seconds -= 1;
        }
        sec.value = seconds.toString().padStart(2, '0');
    });

    sup.addEventListener('click', () => {
        let seconds = parseInt(sec.value) || 0;
        seconds += 1;
        sec.value = seconds.toString().padStart(2, '0');
    });

    const countdown = () => {
        let hours = parseInt(hour.value) || 0;
        let minutes = parseInt(min.value) || 0;
        let seconds = parseInt(sec.value) || 0;

        if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(timerInterval);
            stop.style.display = 'none';
            start.style.display = 'block';
            return;
        }

        if (seconds > 0) {
            seconds -= 1;
        } else if (minutes > 0) {
            minutes -= 1;
            seconds = 59;
        } else if (hours > 0) {
            hours -= 1;
            minutes = 59;
            seconds = 59;
        }

        hour.value = hours.toString().padStart(2, '0');
        min.value = minutes.toString().padStart(2, '0');
        sec.value = seconds.toString().padStart(2, '0');
    }

    let timerInterval;

    start.addEventListener('click', () => {
        let hours = parseInt(hour.value) || 0;
        let minutes = parseInt(min.value) || 0;
        let seconds = parseInt(sec.value) || 0;
    
        if (hours === 0 && minutes === 0 && seconds === 0) {
            alert('タイマーを設定してください。');
            return;
        }
    
        startAudio.play();
        clearInterval(timerInterval);
        timerInterval = setInterval(countdown, 1000);
        start.style.display = 'none';
        stop.style.display = 'block';
    });
    

    stop.addEventListener('click', () => {
        clearInterval(timerInterval);
        stop.style.display = 'none';
        start.style.display = 'block';
    });

    reset.addEventListener('click', () => {
        clearInterval(timerInterval);
        hour.value = "00";
        min.value = "00";
        sec.value = "00";
        stop.style.display = 'none';
        start.style.display = 'block';
    });
});