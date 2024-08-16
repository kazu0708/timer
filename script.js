document.addEventListener('DOMContentLoaded', () => {
    const hour = document.getElementById("hour");
    const min = document.getElementById("minute");
    const sec = document.getElementById("second");
    const hdown = document.getElementById('hourdownbutton');
    const hup = document.getElementById('hourupbutton');
    const mdown = document.getElementById('minutedownbutton');
    const mup = document.getElementById('minuteupbutton');
    const sdown = document.getElementById('seconddownbutton');
    const sup = document.getElementById('secondupbutton');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');

    const countdown = () => {
        if (hour == 0 && minute == 0) {
            sec -= 1;
        }
    }
});