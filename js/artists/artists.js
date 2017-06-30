import ArtistView from './artists-view';
import {changeableData} from '../data/data';
import chooseScreen from '../chooseScreen';
import {setLives, setResult} from '../data/functions';
import {changeScreen} from '../changeScreen';

export default class Artist {
  constructor(game) {
    this.game = game;
    this.view = new ArtistView(this.game[changeableData.attempt]);
  }

  init() {
    changeScreen(this.view.element);

    this.view = new ArtistView(this.game[changeableData.attempt]);

    this.view.onStart = (answer) => {
      if (answer !== true) {
        changeableData.lives = setLives(changeableData);
      } else {
        changeableData.result = setResult(changeableData);
      }
      chooseScreen(this.game);
    };
  }
}
