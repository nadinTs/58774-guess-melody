import resulte from './result';
import resulteFail from './fail';
import getRandom from './getRandom';

const genre = () => {
  const resultArr = {
    1: resulte,
    2: resulteFail
  };

  let j = 0;
  const inputCheck = document.querySelectorAll(`.genre-answer input`);
  const btnAnswerSend = document.querySelector(`button.genre-answer-send`);
  const inputCheckArr = Array.from(inputCheck);

  btnAnswerSend.setAttribute(`disabled`, `disabled`);

  const callChangeScreen = () => {
    inputCheckArr.forEach(function (div) {
      div.checked = false;
      btnAnswerSend.setAttribute(`disabled`, `disabled`);
      j = 0;
    });
    resultArr[getRandom(2, 1)]();
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
};

export default genre;
