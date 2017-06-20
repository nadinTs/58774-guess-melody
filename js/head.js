import {data} from './data/data';
export const headElement = `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
    <circle
      cx="390" cy="390" r="370"
      class="timer-line"
      style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

    <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
      <span class="timer-value-mins">${data.result.minute}</span><!--
      --><span class="timer-value-dots">:</span><!--
      --><span class="timer-value-secs">${data.result.seconds}</span>
    </div>
  </svg>`;
