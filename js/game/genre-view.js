import AbstractView from '../view';
import {changeableData} from '../data/data';
import player from '../player';
import {setTrueAnswer, setLives, setResult} from '../data/functions';


export default class GenreView extends AbstractView {
  constructor(game) {
    // debugger;
    super();
    this.game = game;
    this.answers = this.game.answers;
  }

  get template() {
    return `<section class="main main--level main--level-genre">
      <h2 class="title">${this.game.question}</h2>
      <form class="genre" style="position: relative; z-index: 1000;">
        ${this.answers.map((answer) => `<div class="genre-answer">
          <div class="player-wrapper"></div>
          <input type="checkbox" name="answer" value="${answer.genre}" id="${answer.src}">
          <label class="genre-answer-check" for="${answer.src}"></label>
          </div>`).join(``)}
        <button type="button" class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </section>`;
  }

  bind() {
    let j = 0;
    const box = this.element.querySelectorAll(`.player-wrapper`);
    const btnAnswerSend = this.element.querySelector(`button.genre-answer-send`);
    const boxArr = Array.from(box);
    const inputCheck = this.element.querySelectorAll(`.genre-answer input`);
    const inputCheckArr = Array.from(inputCheck);
    const genre = this.game.genre;
    btnAnswerSend.setAttribute(`disabled`, `disabled`);
    changeableData.trueAnswerArr = 0;
    boxArr.forEach(function (div) {
      let input = div.parentNode.querySelector(`input`);
      player(div, input.id, false, true);
      if (input.value === genre) {
        changeableData.trueAnswerArr += 1;
      }
    });
    inputCheckArr.forEach(function (div) {
      div.checked = false;
      btnAnswerSend.setAttribute(`disabled`, `disabled`);
      j = 0;
    });
    if (changeableData.trueAnswer !== changeableData.trueAnswerArr) {
      changeableData.lives = setLives(changeableData);
    } else {
      changeableData.result = setResult(changeableData);
    }
    changeableData.trueAnswer = 0;

    const changeDisabled = (e) => {
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
      const check = e.target.checked;
      changeableData.trueAnswer += setTrueAnswer(check, genre, e.target.value);
    };

    inputCheckArr.forEach(function (div) {
      div.onclick = changeDisabled;
    });
    btnAnswerSend.onclick = () => {
      inputCheckArr.forEach(function (div) {
        div.checked = false;
      });
      this.onStart();
    };
  }

  onStart() {
  }
}
