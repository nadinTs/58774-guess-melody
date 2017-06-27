import getRandom from './getRandom';
import {setAttempt} from './data/functions';
import {removeTimer} from './removeTimer';
import {changeableData} from './data/data';
import App from './main';
export default () => {
  let screen;
  const questionArr = {
    1: App.showArtists,
    2: App.showGenre
  };
  if (changeableData.attempt > 0 && changeableData.lives > 0) {
    screen = questionArr[getRandom(2, 1)]();
  } else {
    if (changeableData.attempt <= 0) {
      App.showResult();
      removeTimer();
    } else if (changeableData.lives <= 0) {
      App.showResultFail();
      removeTimer();
    }
  }
  setAttempt(changeableData);
  return screen;
};
