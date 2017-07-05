import AbstractView from '../view';

const title = `Угадай мелодию`;
const play = `Начать игру`;
const rulesTitle = `Правила игры`;
const rulesText = `Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.<br> Удачи!`;

export default class WelcomeView extends AbstractView {

  get template() {
    return `<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>${title}</h1></section>
    <h2 class="title main-title">${rulesTitle}</h2>
    <p class="text main-text">${rulesText}
    </p>
  </section>`;
  }

  addButton(enable = true) {
    const section = this.element.querySelector(`.main--welcome`);
    const mainTitle = this.element.querySelector(`.main-title`);
    const button = document.createElement(`button`);
    button.className = `main-play`;
    button.innerText = play;
    section.insertBefore(button, mainTitle);
    button.onclick = () => {
      this.onStart();
    };

  }

  onStart() {
  }
}
