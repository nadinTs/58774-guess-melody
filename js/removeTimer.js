export const removeTimer = () => {
  const app = document.querySelector(`div.app`);
  const timer = document.querySelector(`.main-time`);
  if (timer) {
    app.removeChild(timer);
  }
};
