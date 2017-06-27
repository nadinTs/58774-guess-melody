import AbstractView from '../view';

const title = `Угадай мелодию`;
const subtitle = `Вы проиграли`;
const stat = `Ничего, вам повезет в следующий раз`;
const replay = `Сыграть ещё раз`;


export default class ResultFailView extends AbstractView {

  get template() {
    return `<section class="main main--result">
  <section class="logo" title="Угадай мелодию"><h1>${title}</h1></section>
    <h2 class="title">${subtitle}</h2>
    <div class="main-stat">${stat}</div>
    <span role="button" tabindex="0" class="main-replay">${replay}</span>
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
