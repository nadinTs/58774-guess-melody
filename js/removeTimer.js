export const removeTimer = () => {
  const app = document.querySelector(`div.app section.main`);
  const timer = document.querySelector(`.main-timer`);
  if (timer) {
    app.removeChild(timer);
  }
};
