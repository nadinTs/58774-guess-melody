import result from './result';
import resultFail from './fail';
import getRandom from './getRandom';
import player from './player';
import artist from './artist';
import genre from './genre';
import {setTry} from './data/functions';
import {data, changeableData} from './data/data';

export default () => {
  const questionArr = {
    1: artist,
    2: genre
  };

  let j = 0;
  const inputCheck = document.querySelectorAll(`.genre-answer input`);
  const btnAnswerSend = document.querySelector(`button.genre-answer-send`);
  const inputCheckArr = Array.from(inputCheck);
  const answerElementArtist = document.querySelector(`.main-answer-r`);

  const setTrueScreen = () => {
    if (changeableData.try > 0) {
      questionArr[getRandom(2, 1)]();
    } else {
      if (changeableData.try < 0 || (changeableData.minute < 0 && changeableData < 0)) {
        result();
      } else {
        resultFail();
      }
    }
    setTry(changeableData);
  };
  if (btnAnswerSend) {
    btnAnswerSend.setAttribute(`disabled`, `disabled`);
    const callChangeScreen = () => {
      inputCheckArr.forEach(function (div) {
        div.checked = false;
        btnAnswerSend.setAttribute(`disabled`, `disabled`);
        j = 0;
      });
      setTrueScreen();
    };
    const box = document.querySelectorAll(`.player-wrapper`);
    const boxArr = Array.from(box);
    boxArr.forEach(function (div) {
      let input = div.parentNode.querySelector(`input`);
      player(div, Object.keys(data.track[input.id]), false, true);
      // console.log(Object.values(data.track[input.id]));
    });
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
  } else {
    answerElementArtist.onclick = setTrueScreen;
  }
};
