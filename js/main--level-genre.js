import mainLevelGenre from './genre-level';
import changeScreen from './changeScreen';
import resulte from './main--result';
import resulteFail from './main--result-fail';
import getRandom from './getRandom';

const resultArr = {
  1: resulte,
  2: resulteFail
};

let j = 0;
const inputCheck = mainLevelGenre.querySelectorAll(`.genre-answer input`);
const btnAnswerSend = mainLevelGenre.querySelector(`button.genre-answer-send`);
const inputCheckArr = Array.from(inputCheck);

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
