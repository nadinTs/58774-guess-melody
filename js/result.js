import welcome from './welcome';
import changeScreen from './changeScreen';
import data from './data';

const screenMainResult = (result) => `<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За ${result.minute} минуты<br>вы отгадали ${result.answer} мелодии</div>
    <span class="main-comparison">Это лучше чем у ${result.percent}% игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

export default () => {
  changeScreen(screenMainResult(data.result));
  const btnReturn = document.querySelector(`.main-replay`);
  btnReturn.onclick = () => {
    welcome(data);
  };
};
