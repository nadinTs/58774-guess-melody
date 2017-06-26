import welcome from './welcome';
import {changeScreen} from './changeScreen';
import {data} from './data/data';

const screenMainResultFail = (fail) => `<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>${fail.title}</h1></section>
    <h2 class="title">${fail.subtitle}</h2>
    <div class="main-stat">${fail.stat}</div>
    <span role="button" tabindex="0" class="main-replay">${fail.replay}</span>
  </section>`;

export default () => {
  changeScreen(screenMainResultFail(data.fail));
  const btnReturn = document.querySelector(`.main-replay`);
  btnReturn.onclick = () => {
    welcome(data);
  };
};
