import GenreView from './genre-view';
import ArtistView from './artist-view';
import ResultView from './resulte-view';
import TimerView from './timer-view';
import {app} from '../main';
import {removeTimer} from '../removeTimer';
import {changeScreen} from '../changeScreen';
import Model from '../model';

export default class Game {
  constructor() {
    this.model = new class extends Model {
      get urlRead() {
        return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions`;
      }
    }();

    this.statsModel = new class extends Model {
      get urlRead() {
        return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/:id58774`;
      }

      get urlWrite() {
        return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/:id58774`;
      }
    }();
  }

  init() {
    this.lives = 3;
    this.level = 0;
    this.correctAnswers = 0;
    this.setTimer();
    this.nextLevel();
    let self = this;
    this.statsModel.load()
      .then((data) => {
        self.statsData = data;
      })
      .catch(window.console.error);
  }

  sendStats() {
    this.statsData = {
      time: this.timer.seconds,
      answers: this.correctAnswers
    };
    this.statsModel.send(JSON.stringify(this.statsData));
  }

  loadData() {
    app.model.load();
  }

  setTimer() {
    this.timer = new TimerView(2 * 60 * 1000);
    changeScreen(this.timer.element);
    this.timer.onTimeout = () => {
      removeTimer();
      clearInterval(this.time);
      app.showResultFail();
    };
    window.initializeCountdown();
  }

  artistLevel() {
    const view = new ArtistView(this.game[this.level]);
    view.onAnswer = (correct) => {
      if (correct) {
        this.correctAnswers += 1;
      } else {
        this.lives--;
      }
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

  setResult() {
    const view = new ResultView(this.correctAnswers, this.timer.seconds, this.statsData);
    view.onAnswer = () => {
      app.showWelcome();
    };
    changeScreen(view.element);
    this.sendStats();
  }

  nextLevel() {
    if (this.level < 10 && this.lives > 0) {
      const question = this.game[this.level];
      if (question.type === `artist`) {
        this.artistLevel();
      } else if (question.type === `genre`) {
        this.genreLevel();
      }
      this.level++;
    } else {
      if (this.level >= 10) {
        this.setResult();
        removeTimer();
      } else if (this.lives <= 0) {
        app.showResultFail();
        removeTimer();
      }
    }
  }
}
