import GenreView from './genre-view';
import ArtistView from './artist-view';
import TimerView from './timer-view';
import {app} from '../main';
import {removeTimer} from '../removeTimer';
import {changeScreen} from '../changeScreen';

export default class Game {
  constructor(game) {
    this.game = game;
    this.lives = 3;
    this.level = 0;
    this.correctAnswers = 0;
  }

  init() {
    this.setTimer();
    this.nextLevel();
  }

  setTimer() {
    this.timer = new TimerView(2 * 60 * 1000);
    changeScreen(this.timer.element);
    this.timer.onTimeout = () => {
      removeTimer();
      app.showResultFail();
    };

    window.initializeCountdown();

  }

  artistLevel() {
    const view = new ArtistView(this.game[this.level]);
    view.onStart = () => {
      this.nextLevel();
    };
    changeScreen(view.element);
  }

  genreLevel() {
    const view = new GenreView(this.game[this.level]);
    view.onAnswer = (correct) => {
      if (correct) {
        this.correctAnswers++;
      } else {
        this.lives--;
      }
      this.nextLevel();
    };
    changeScreen(view.element);
  }

  nextLevel() {
    if (this.level < 10 && this.lives > 0) {
      this.level++;
      const question = this.game[this.level];
      if (question.type === `artist`) {
        this.artistLevel();
      } else if (question.type === `genre`) {
        this.genreLevel();
      }
    } else {
      if (this.level >= 10) {
        app.showResult();
        removeTimer();
      } else if (this.lives <= 0) {
        app.showResultFail();
        removeTimer();
      }
    }
  }
}
