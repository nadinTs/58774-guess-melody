import WelcomeView from './welcome-view';
import {changeableData} from '../data/data';
import {changeScreen} from '../changeScreen';
import {finishGame} from '../data/functions';
import {app} from '../main';

export default class Welcome {
  constructor(game) {
    const srcArr = [];
    this.game = game;
    this.view = new WelcomeView();

    game.map((element) => {
      if (element.type === `artist`) {
        if (element.src !== ``) {
          srcArr.push(element.src);
        }
      } else {
        const answers = element.answers;
        answers.map((inner) => {
          if (inner.src !== ``) {
            srcArr.push(inner.src);
          }
        });
      }
    });
    this.i = 0;
    const self = this;
    srcArr.forEach(function (src) {
      let audio = document.createElement(`audio`);
      audio.preload = `auto`;
      audio.src = src;
      audio.addEventListener(`canplaythrough`, function () {
        self.i++;
        if (self.i === srcArr.length) {
          self.view.addButton();
        }
      }, false);
    });
  }

  init() {
    changeScreen(this.view.element);
    finishGame(changeableData);
    this.view.onStart = () => {
      app.showGame();
    };
  }
}
