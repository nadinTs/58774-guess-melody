import welcome from './welcome';
import changeScreen from './changeScreen';
import data from './data';

export default () => {
  const screenMainResultFail = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>${data.fail.title}</h1></section>
    <h2 class="title">${data.fail.subtitle}</h2>
    <div class="main-stat">${data.fail.stat}</div>
    <span role="button" tabindex="0" class="main-replay">${data.fail.replay}</span>
  </section>`;
  changeScreen(screenMainResultFail);
  const btnReturn = document.querySelector(`.main-replay`);
  btnReturn.onclick = () => {
    welcome(data);
  };
};
