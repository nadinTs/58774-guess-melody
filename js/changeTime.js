import {setTimerSecond} from './data/functions';
import {changeableData} from './data/data';
import {removeTimer} from './removeTimer';
import {finishGame} from './data/functions';

const changeTime = (value) => {
  const timer = setInterval(() => {
    changeableData.seconds = setTimerSecond(value);
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    finishGame(changeableData);
    removeTimer();
  }, 123000);
};
export default changeTime;
