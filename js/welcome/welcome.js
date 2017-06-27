import WelcomeView from './welcome-view';
import timerElement from '../timerElement/timerElement';
import {changeableData} from '../data/data';
import changeTime from '../changeTime';
import {changeScreen} from '../changeScreen';
import chooseScreen from '../chooseScreen';

export default () => {
  const myWelcomeView = new WelcomeView();
  myWelcomeView.onStart = () => {
    const myTimerElement = timerElement();
    changeScreen(myTimerElement);
    changeTime(changeableData);
    window.initializeCountdown();
    chooseScreen(changeableData);
  };
  return myWelcomeView.element;
};
