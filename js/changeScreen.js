const app = document.querySelector(`div.app`);
const main = app.querySelector(`section.main`);

const changeScreen = function (oldElement, newElement) {
  main.replaceChild(newElement, oldElement);
};
export default changeScreen;

