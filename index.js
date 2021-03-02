import { CountdownTimer } from "./src/countdown-timer.js"
const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
};

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date(2032, 3, 2, 3, 2, 3),
    onTick: updateTimer,
});

function updateTimer({ days, hours, mins, secs }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
};
  