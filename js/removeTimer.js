export const removeTimer = () => {
  const app = document.querySelector(`div.app`);
  const timerValue = app.querySelector(`.main-timer`);
  if (timerValue) {
    app.removeChild(timerValue);
  }
};
