import WelcomeView from './welcome-view';
import timerElement from '../timerElement/timerElement';
import {changeableData} from '../data/data';
import changeTime from '../changeTime';
import {changeScreen} from '../changeScreen';
import chooseScreen from '../chooseScreen';
import {finishGame} from '../data/functions';

export default class Welcome {
  constructor() {
    this.view = new WelcomeView();
  }
  init() {
    changeScreen(this.view.element);
    finishGame(changeableData);
    this.view.onStart = () => {
      const myTimerElement = timerElement();
      changeScreen(myTimerElement);
      changeTime(changeableData);
      window.initializeCountdown();
      chooseScreen();
    };
  }

}
