import AbstractView from '../view';

const title = `Угадай мелодию`;
const play = `Начать игру`;
const rulesTitle = `Правила игры`;
const rulesText = `Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.<br> Удачи!`;

export default class WelcomeView extends AbstractView {

  get template() {
    return `<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>${title}</h1></section>
    <button class="main-play">${play}</button>
    <h2 class="title main-title">${rulesTitle}</h2>
    <p class="text main-text">${rulesText}
    </p>
  </section>`;
  }

  bind() {
    const buttonPlay = this.element.querySelector(`.main-play`);
    buttonPlay.onclick = () => {
      this.onStart();
    };
  }
  onStart() {
  }
}
