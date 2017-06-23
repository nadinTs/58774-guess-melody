import {setTimerSecond} from './data/functions';
import {changeableData} from './data/data';
import {removeTimer} from './removeTimer';
import {finishGame} from './data/functions';
import resultFail from './fail';
import artist from './artist';

const app = document.querySelector(`div.app`);
const changeTime = (value, head) => {
  const timer = setInterval(() => {
    setTimerSecond(value);
    removeTimer();
    app.insertAdjacentHTML(`afterBegin`, head(changeableData));
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    finishGame(changeableData);
    removeTimer();
    resultFail();
  }, 120000);
  artist();
  window.initializeCountdown();
};
export default changeTime;
