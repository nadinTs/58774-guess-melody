import player from './player';
import {changeableData, data} from './data/data';
import {track} from './track';
import chooseScreen from './chooseScreen';
import {setTrueAnswer, setLives, setResult} from './data/functions';

export default () => {
  let j = 0;
  const inputCheck = document.querySelectorAll(`.genre-answer input`);
  const btnAnswerSend = document.querySelector(`button.genre-answer-send`);
  const inputCheckArr = Array.from(inputCheck);
  const answerElementArtist = document.querySelector(`.main-list`);
  const mainLevelArtist = document.querySelector(`.main--level-artist`);

  if (btnAnswerSend) {
    btnAnswerSend.setAttribute(`disabled`, `disabled`);
    const callChangeScreen = () => {
      inputCheckArr.forEach(function (div) {
        div.checked = false;
        btnAnswerSend.setAttribute(`disabled`, `disabled`);
        j = 0;
      });
      chooseScreen(changeableData);
      if (changeableData.trueAnswer !== changeableData.trueAnswerArr) {
        changeableData.lives = setLives(changeableData);
      } else {
        changeableData.result = setResult(changeableData);
      }
      changeableData.trueAnswer = 0;
    };
    const box = document.querySelectorAll(`.player-wrapper`);
    const boxArr = Array.from(box);
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
    btnAnswerSend.onclick = callChangeScreen;
  } else if (mainLevelArtist) {
    const playerWrapper = document.querySelector(`.player-wrapper`);
    player(playerWrapper, Object.keys(track[`a-3`]), true, true);

    const setTrueScreen = (e) => {
      const element = e.target.parentNode.querySelector(`span`).innerHTML;
      if (data.artist[element] !== true) {
        changeableData.lives = setLives(changeableData);
      } else {
        changeableData.result = setResult(changeableData);
      }
      chooseScreen(changeableData);
    };
    answerElementArtist.onclick = setTrueScreen;
  }
};
