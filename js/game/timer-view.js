import AbstractView from '../view';
export default class TimerView extends AbstractView {

  constructor(timeout) {
    super();
    this.timeout = timeout;
    this.seconds = 0;
  }

  get tagName() {
    return `div`;
  }

  get className() {
    return `main-time`;
  }

  get template() {
    return `<div class="main-timer">
      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
      </svg>
       <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">02</span><!--
      --><span class="timer-value-dots">:</span><!--
      --><span class="timer-value-secs">00</span>
      </div>
    </div>`;
  }

  bind() {
    const self = this;
    this.timer = setInterval(() => {
      self.seconds++;
    }, 1000);

    this.timeout = setTimeout(() => {
      clearInterval(this.timer);
      this.onTimeout();
    }, this.timeout);
  }
  onTimeout() {
  }
}
