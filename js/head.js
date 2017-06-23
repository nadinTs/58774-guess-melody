export const refreshHeader = (arr) => `
    <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
      <span class="timer-value-mins">${arr.minute}</span><!--
      --><span class="timer-value-dots">:</span><!--
      --><span class="timer-value-secs">${arr.seconds}</span>
    </div>`;
