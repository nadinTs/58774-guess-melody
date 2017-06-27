import AbstractView from '../view';
import {data, changeableData} from '../data/data';
import {track} from '../track';
import player from '../player';
import {setTrueAnswer, setLives, setResult} from '../data/functions';


export default class GenreView extends AbstractView {

  get template() {
    return `<section class="main main--level main--level-genre">
    <h2 class="title">${data.genre.title}</h2>
    <form class="genre" style="position: relative; z-index: 1000;">
      ${Object.keys(track).map((element) => `<div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="${element}">
        <label class="genre-answer-check" for="${element}"></label>
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
    btnAnswerSend.setAttribute(`disabled`, `disabled`);

    changeableData.trueAnswerArr = 0;
    boxArr.forEach(function (div) {
      let input = div.parentNode.querySelector(`input`);
      player(div, Object.keys(track[input.id]), false, true);
      const arrInner = track[input.id];
      Object.values(arrInner).map((element) => {
        if (element === true) {
          changeableData.trueAnswerArr += 1;
        }
      });
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
      const idCheckedElement = e.target.parentNode.querySelector(`input`).id;
      const check = e.target.checked;
      changeableData.trueAnswer += setTrueAnswer(check, changeableData.trueAnswer, track[idCheckedElement]);
    };

    inputCheckArr.forEach(function (div) {
      div.onclick = changeDisabled;
    });
    btnAnswerSend.onclick = () => {
      this.onStart();
    };
  }

  onStart() {
  }
}
