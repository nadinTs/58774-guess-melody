import result from './result/result';
import resultFail from './resultFail/resultFail';
import artist from './artists/artists';
import genre from './genre/genre';
import getRandom from './getRandom';
import {setAttempt} from './data/functions';
import {removeTimer} from './removeTimer';
import {changeableData} from './data/data';
import {finishGame} from './data/functions';
import {changeScreen} from './changeScreen';

export default (data) => {
  const questionArr = {
    1: artist,
    2: genre
  };
  if (data.attempt > 0 && data.lives > 0 && data.minute !== 2 && data.seconds !== 59) {
    changeScreen(questionArr[getRandom(2, 1)]());
  } else {
    if (data.attempt <= 0) {
      changeScreen(result());
      removeTimer();
    } else if (data.lives <= 0 || data.minute !== 2 && data.seconds !== 59) {
      changeScreen(resultFail());
      removeTimer();
    }
    finishGame(changeableData);
  }
  setAttempt(data);
};
