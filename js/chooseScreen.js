import getRandom from './getRandom';
import {setAttempt} from './data/functions';
import {removeTimer} from './removeTimer';
import {changeableData} from './data/data';
import {app} from './main';

export default () => {
  let screen;
  const questionArr = {
    1: app.showArtists,
    2: app.showGenre
  };
  if (changeableData.attempt > 0 && changeableData.lives > 0) {
    screen = questionArr[getRandom(2, 1)]();
  } else {
    if (changeableData.attempt <= 0) {
      app.showResult();
      removeTimer();
    } else if (changeableData.lives <= 0) {
      app.showResultFail();
      removeTimer();
    }
  }
  setAttempt(changeableData);
  return screen;
};
