import result from './result';
import resultFail from './fail';
import artist from './artist';
import getRandom from './getRandom';
import genre from './genre';
import {setAttempt} from './data/functions';
import {removeTimer} from './removeTimer';
import {changeableData} from './data/data';
import {finishGame} from './data/functions';

export default (data) => {
  const questionArr = {
    1: artist,
    2: genre
  };
  if (data.attempt > 0 && data.lives > 0 && data.minute !== 2 && data.seconds !== 59) {
    questionArr[getRandom(2, 1)]();
    window.initializeCountdown();
  } else {
    if (data.attempt <= 0) {
      result(data);
      removeTimer();
    } else if (data.lives <= 0 || data.minute !== 2 && data.seconds !== 59) {
      resultFail();
      removeTimer();
    }
    finishGame(changeableData);
  }
  setAttempt(data);
};
