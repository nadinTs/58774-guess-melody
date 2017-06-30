import AbstractView from '../view';

export default class ResultView extends AbstractView {
  constructor(game) {
    super();
    // this.game = game;
    // this.answers = this.game.answers;
  }

  get template() {
    // const statArr = Object.values(window.location.hash.split(`=`)[1].split(`,`));
    const statArr = {
      0: `dd`,
      1: `eweww`,
      2: `ewewe`,
    };
    return `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <h2 class="title">Вы настоящий меломан!</h2>
      <div class="main-stat">За ${statArr[0]} секунды<br>вы отгадали ${statArr[2]} мелодии</div>
      <span class="main-comparison">Это лучше чем у ${statArr[1]}% игроков</span>
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>`;
  }

  bind() {
    const btnReturn = this.element.querySelector(`.main-replay`);
    btnReturn.onclick = () => {
      this.onAnswer();
    };
  }

  onAnswer(correct) {
  }
}
