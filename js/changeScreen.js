const app = document.querySelector(`div.app`);
const main = app.querySelector(`section.main`);

const changeScreen = function (element) {
  main.innerHTML = element;
};
export default changeScreen;

