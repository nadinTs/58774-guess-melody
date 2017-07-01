import AbstractView from '../view';
import {setPercent} from '../data/functions';

export default class ResultView extends AbstractView {
  constructor(answers, timer, response) {
    super();
    this.answers = answers;
    this.timer = timer;
    this.response = response;
  }
  get template() {
    return `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <h2 class="title">Вы настоящий меломан!</h2>
      <div class="main-stat">За ${this.timer} секунды<br>вы отгадали ${this.answers} мелодии</div>
      <span class="main-comparison">Это лучше чем у ${setPercent(this.response, {answers: this.answers, time: this.timer})}% игроков</span>
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>`;
  }

  bind() {
    let correct = true;
    const btnReturn = this.element.querySelector(`.main-replay`);
    btnReturn.onclick = () => {
      this.onAnswer(correct);
    };
  }

  onAnswer(correct) {
  }
}
