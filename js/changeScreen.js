const app = document.querySelector(`div.app`);

export const changeScreen = (element, head) => {
  const main = app.querySelector(`section.main`);
  const timerValue = document.querySelector(`.main-timer`);
  app.removeChild(main);
  app.insertAdjacentHTML(`afterBegin`, element);
  if (head) {
    if (timerValue) {
      app.removeChild(timerValue);
    }
    app.insertAdjacentHTML(`afterBegin`, head);
  }
};
