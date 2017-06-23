import welcome from './welcome';
import {changeScreen} from './changeScreen';
import {data, changeableData} from './data/data';
import {setPercent} from './data/functions';
import {statistics} from './data/statistic';

const screenMainResult = (dataInsert) => `<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За ${dataInsert.minute} минуты<br>вы отгадали ${dataInsert.result} мелодии</div>
    <span class="main-comparison">Это лучше чем у ${setPercent(statistics, changeableData)}% игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

export default (dataInsert) => {
  changeScreen(screenMainResult(dataInsert));
  const btnReturn = document.querySelector(`.main-replay`);
  btnReturn.onclick = () => {
    welcome(data);
  };
};
