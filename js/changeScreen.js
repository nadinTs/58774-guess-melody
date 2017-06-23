const app = document.querySelector(`div.app`);

export const changeScreen = (element, head) => {
  const main = app.querySelector(`section.main`);
  app.removeChild(main);
  app.insertAdjacentHTML(`afterBegin`, element);
};
