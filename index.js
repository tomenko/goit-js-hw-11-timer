class CountdownTimer {
    constructor({ selector, targetDate, onTick }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.onTick = onTick;
        this.countDown();
        this.selectorId();
    }

    selectorId() {
        document.querySelector('.timer').setAttribute("id", `${this.selector}`)
    };

    countDown() {
        setInterval(() => {
            const curentTime = new Date();
            const deltatime = this.targetDate - curentTime;
            const time = this.getTimeComponents(deltatime);
            this.onTick(time);
        }, 1000);
        
    };

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(
            Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        );
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs };
    }

    pad(value) {
        return String(value).padStart(2, '0');
    };
};

const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
};

function updateTimer({ days, hours, mins, secs }) {
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
};

export default new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date(2021, 2, 25, 7, 5, 0),
    onTick: updateTimer,
});



  