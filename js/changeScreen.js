const app = document.querySelector(`div.app`);
export const changeScreen = (element) => {
  const section = app.querySelector(`.main`);
  if (section) {
    app.removeChild(section);
  }
  app.appendChild(element);
};
