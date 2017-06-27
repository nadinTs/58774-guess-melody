import AbstractView from '../view';
import {changeableData} from '../data/data';
import {setPercent} from '../data/functions';
import {statistics} from '../data/statistic';

export default class ResultView extends AbstractView {

  get template() {
    return `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <h2 class="title">Вы настоящий меломан!</h2>
      <div class="main-stat">За ${changeableData.seconds} секунды<br>вы отгадали ${changeableData.result} мелодии</div>
      <span class="main-comparison">Это лучше чем у ${setPercent(statistics, changeableData)}% игроков</span>
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>`;
  }

  bind() {
    const btnReturn = this.element.querySelector(`.main-replay`);
    btnReturn.onclick = () => {
      this.onStart();
    };
  }
  onStart() {
  }
}
