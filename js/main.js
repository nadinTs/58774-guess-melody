import Welcome from './welcome/welcome';
import Artists from './artists/artists';
import Genre from './genre/genre';
import Result from './result/result';
import ResultFail from './resultFail/resultFail';

import './animate';
import './time-format';
import './timer.js';


const ControllerID = {
  WELCOME: ``,
  ARTISTS: `artists`,
  GENRE: `genre`
};


const getControllerIDFromHash = (hash) => hash.replace(`#`, ``);


class App {
  constructor() {
    this.routes = {
      [ControllerID.WELCOME]: Welcome,
      [ControllerID.ARTISTS]: Artists,
      [ControllerID.GENRE]: Genre,
      [ControllerID.RESULT]: Result,
      [ControllerID.RESULTFAIL]: ResultFail
    };

    window.onhashchange = () => {
      this.changeController(getControllerIDFromHash(location.hash));
    };
  }

  changeController(route = ``) {
    const Controller = this.routes[route];
    new Controller().init();
  }

  init() {
    this.changeController(getControllerIDFromHash(location.hash));
  }

  showWelcome() {
    location.hash = ControllerID.WELCOME;
  }
  showArtists() {
    location.hash = ControllerID.ARTISTS;
  }
  showGenre() {
    location.hash = ControllerID.GENRE;
  }
  showResult() {
    location.hash = ControllerID.RESULT;
  }
  showResultFail() {
    location.hash = ControllerID.RESULTFAIL;
  }
}
const app = new App();
app.init();
export default app;
