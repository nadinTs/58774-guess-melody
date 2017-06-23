import result from './result';
import resultFail from './fail';
import artist from './artist';
import getRandom from './getRandom';
import genre from './genre';
import {setAttempt} from './data/functions';
import {finishGame} from './data/functions';
import {changeableData} from './data/data';

export default (data) => {
  const questionArr = {
    1: artist,
    2: genre
  };
  if (data.attempt > 0 && data.lives > 0 && data.minute !== 2 && data.seconds !== 59) {
    questionArr[getRandom(2, 1)]();
  } else {
    if (data.attempt <= 0) {
      result(data);
    } else if (data.lives <= 0 || data.minute !== 2 && data.seconds !== 59) {
      resultFail();
    }
    finishGame(changeableData);
  }
  setAttempt(data);
};
