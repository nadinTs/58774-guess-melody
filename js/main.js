import Welcome from './welcome/welcome';
import Game from './game/game';
import ResultFail from './resultFail/resultFail';
import Model from './model';

import './animate';
import './time-format';
import './timer.js';

export const ControllerID = {
  WELCOME: ``,
  GAME: `game`,
  RESULTFAIL: `fail`
};

export const getControllerIDFromHash = (hash) => hash.replace(`#`, ``);

class App {
  constructor() {

    this.model = new class extends Model {
      get urlRead() {
        return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions`;
      }

      get urlWrite() {
        return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/:id58774`;
      }
    }();

    this.model.load()
      .then((data) => this.setup(data))
      .then(() => this.changeController(getControllerIDFromHash(location.hash)))
      .catch(window.console.error);
  }

  setup(data) {
    this.routes = {
      [ControllerID.WELCOME]: new Welcome(),
      [ControllerID.GAME]: new Game(data),
      [ControllerID.RESULTFAIL]: new ResultFail(),
    };

    window.onhashchange = () => {
      this.changeController(getControllerIDFromHash(location.hash));
    };

  }

  changeController(route = ``) {
    this.routes[route].init();
  }

  showWelcome() {
    location.hash = ControllerID.WELCOME;
  }

  showGame() {
    location.hash = ControllerID.GAME;
  }

  showResultFail() {
    location.hash = ControllerID.RESULTFAIL;
  }
}
export const app = new App();
