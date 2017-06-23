export const removeTimer = () => {
  const app = document.querySelector(`div.app`);
  const timerValue = app.querySelector(`.timer-value`);
  if (timerValue) {
    app.removeChild(timerValue);
  }
};
