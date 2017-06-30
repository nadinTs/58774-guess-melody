import WelcomeView from './welcome-view';
import {changeableData} from '../data/data';
import {changeScreen} from '../changeScreen';
import {finishGame} from '../data/functions';
import {app} from '../main';

export default class Welcome {
  constructor(game) {
    this.game = game;
    this.view = new WelcomeView();
  }
  init() {
    changeScreen(this.view.element);
    finishGame(changeableData);
    this.view.onStart = () => {
      app.showGame();
    };
  }
}
