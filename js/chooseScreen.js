import {setAttempt} from './data/functions';
import {removeTimer} from './removeTimer';
import {changeableData} from './data/data';
import {app} from './main';
export default (game) => {
  // debugger;
  if (changeableData.attempt > 0 && changeableData.lives > 0) {
    let level = game[changeableData.attempt].type;
    if (level === `artist`) {
      app.showArtists();
    } else if (level === `genre`) {
      app.showGenre();
    }
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
};
