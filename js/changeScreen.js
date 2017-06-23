import {setTimerSecond} from './data/functions';
import {changeableData} from './data/data';
import resultFail from './fail';
import {finishGame} from './data/functions';

const app = document.querySelector(`div.app`);

const removeTimer = () => {
  const timerValue = app.querySelector(`.timer-value`);
  if (timerValue) {
    app.removeChild(timerValue);
  }
};
export const changeScreen = (element, head, value) => {
  const main = app.querySelector(`section.main`);
  app.removeChild(main);
  app.insertAdjacentHTML(`afterBegin`, element);
  if (head) {
    const timer = setInterval(() => {
      setTimerSecond(value);
      removeTimer();
      app.insertAdjacentHTML(`afterBegin`, head(changeableData));
      window.initializeCountdown();
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      finishGame(changeableData);
      removeTimer();
      resultFail();
    }, 120000);
  }
};
