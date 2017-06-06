import getElementFromTemplate from './get--element-from-template';
import changeScreen from './changeScreen';
import mainResulte from './main--result';
import mainResulteFail from './main--result-fail';

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

const getRandom = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const mainLevelGenre = getElementFromTemplate(screenMainLevelGenre);
const inputCheck = mainLevelGenre.querySelectorAll(`.genre-answer input`);

const callChangeScreen = () => {
  [].forEach.call(inputCheck, function (div) {
    div.checked = false;
  });
  changeScreen(mainLevelGenre, resultArr[getRandom(2, 1)]);
};

const btnAnswerSend = mainLevelGenre.querySelector(`button.genre-answer-send`);
btnAnswerSend.setAttribute(`disabled`, `disabled`);

let j = 0;
const addDisabled = (e) => {
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

[].forEach.call(inputCheck, function (div) {
  div.onclick = addDisabled;
});
btnAnswerSend.onclick = callChangeScreen;

export default mainLevelGenre;
