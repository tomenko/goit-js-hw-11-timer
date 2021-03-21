import timerMarkup from '../template/timer.hbs';

class CountdownTimer {
    constructor({ selector, targetDate }) {
      this.selector = selector;
      this.targetDate = targetDate;
      this.time = this.targetDate - new Date();
      this.createMarkup(this.selector, this.time);
      this.timer(this.targetDate, this.time);
    }
    
    createMarkup(selector, time) {
      const bodyRef = document.querySelector('body');
      const upTime = this.getTimeComponents(time);
      bodyRef.insertAdjacentHTML(
        'beforeend',
        timerMarkup({ selector, ...upTime }),
      );
    }
    
    timer(date, time) {
      const refs = {
        days: document.querySelector(
          `div[id="${this.selector}"] span[data-value="days"]`,
        ),
        hours: document.querySelector(
          `div[id="${this.selector}"] span[data-value="hours"]`,
        ),
        mins: document.querySelector(
          `div[id="${this.selector}"] span[data-value="mins"]`,
        ),
        secs: document.querySelector(
          `div[id="${this.selector}"] span[data-value="secs"]`,
        ),
    };

    setInterval(() => {
       time = time - 1000;
       const valueTime = this.getTimeComponents(time);
       refs.days.textContent = valueTime.days;
       refs.hours.textContent = valueTime.hours;
       refs.mins.textContent = valueTime.mins;
       refs.secs.textContent = valueTime.secs;
     }, 1000);
    }
    

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
    }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(2021, 8, 24, 7, 5, 0),
});

new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date(2021, 2, 25, 7, 5, 0),
});
