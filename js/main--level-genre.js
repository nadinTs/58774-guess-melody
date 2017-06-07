import getElementFromTemplate from './get--element-from-template';
import changeScreen from './changeScreen';
import mainResulte from './main--result';
import mainResulteFail from './main--result-fail';
import getRandom from './getRandom';

const resultArr = {
  1: mainResulte,
  2: mainResulteFail
};

const screenMainLevelGenre = `<section class="main main--level main--level-genre">
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-1">
        <label class="genre-answer-check" for="a-1"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-2">
        <label class="genre-answer-check" for="a-2"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-3">
        <label class="genre-answer-check" for="a-3"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-4">
        <label class="genre-answer-check" for="a-4"></label>
      </div>

      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>`;

let j = 0;
const mainLevelGenre = getElementFromTemplate(screenMainLevelGenre);
const inputCheck = mainLevelGenre.querySelectorAll(`.genre-answer input`);
const btnAnswerSend = mainLevelGenre.querySelector(`button.genre-answer-send`);
const inputCheckArr = Array.from(inputCheck);

btnAnswerSend.setAttribute(`disabled`, `disabled`);

const callChangeScreen = () => {
  inputCheckArr.forEach(function (div) {
    div.checked = false;
    btnAnswerSend.setAttribute(`disabled`, `disabled`);
    j = 0;
  });
  changeScreen(mainLevelGenre, resultArr[getRandom(2, 1)]);
};


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
};

inputCheckArr.forEach(function (div) {
  div.onclick = changeDisabled;
});
btnAnswerSend.onclick = callChangeScreen;

export default mainLevelGenre;
