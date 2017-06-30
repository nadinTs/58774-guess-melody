import AbstractView from '../view';
import player from '../player';


export default class GenreView extends AbstractView {
  constructor(game) {
    super();
    this.game = game;
    this.answers = this.game.answers;
  }

  get template() {
    return `<section class="main main--level main--level-genre">
      <h2 class="title">${this.game.question}</h2>
      <form class="genre" style="position: relative; z-index: 1000;">
        ${this.answers.map((answer) => `<div class="genre-answer">
          <div class="player-wrapper" data-src="${answer.src}"></div>
          <input type="checkbox" name="answer" value="${answer.genre}" id="${answer.src}">
          <label class="genre-answer-check" for="${answer.src}"></label>
          </div>`).join(``)}
        <button type="button" class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </section>`;
  }

  bind() {
    const players = this.element.querySelectorAll(`.player-wrapper`);
    const btnAnswerSend = this.element.querySelector(`button.genre-answer-send`);
    const inputCheck = this.element.querySelectorAll(`.genre-answer input`);

    const playerArr = Array.from(players);
    playerArr.forEach(function (playerElement) {
      player(playerElement, playerElement.getAttribute(`data-src`), false, true);
    });

    btnAnswerSend.setAttribute(`disabled`, `disabled`);

    let j = 0;
    const inputCheckArr = Array.from(inputCheck);
    inputCheckArr.forEach(function (input) {
      input.onclick = (e) => {
        if (e.target.checked) {
          j++;
        } else {
          j--;
        }
        if (j > 0) {
          btnAnswerSend.removeAttribute(`disabled`);
        } else {
          btnAnswerSend.setAttribute(`disabled`, `disabled`);
        }
      };
    });

    btnAnswerSend.onclick = () => {
      let correct = true;
      let self = this;
      inputCheckArr.forEach(function (input) {
        if (input.value === self.game.genre && !input.checked) {
          correct = false;
        } else if (input.value !== self.game.genre && input.checked) {
          correct = false;
        }
      });
      this.onAnswer(correct);
    };
  }

  onAnswer(correct) {
  }
}
