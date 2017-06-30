import GenreView from './genre-view';
import chooseScreen from '../chooseScreen';
import {changeScreen} from '../changeScreen';
import {changeableData} from '../data/data';

export default class Genre {
  constructor(game) {
    // debugger;
    this.game = game;
    this.view = new GenreView(this.game[changeableData.attempt]);
  }
  init() {
    changeScreen(this.view.element);
    console.log(`attempt`, changeableData.attempt);
    this.view = new GenreView(this.game[changeableData.attempt]);

    this.view.onStart = () => {
      chooseScreen(this.game);
    };
  }
}
