import {setTimerSecond} from './data/functions';
import {changeableData} from './data/data';
import {removeTimer} from './removeTimer';
import {finishGame} from './data/functions';
import resultFail from './fail';

const changeTime = (value) => {
  const timer = setInterval(() => {
    changeableData.seconds = setTimerSecond(value);
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    finishGame(changeableData);
    removeTimer();
    resultFail();
  }, 120000);
};
export default changeTime;
