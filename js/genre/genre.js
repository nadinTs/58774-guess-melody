import GenreView from './genre-view';
import chooseScreen from '../chooseScreen';
import {changeScreen} from '../changeScreen';

export default class Genre {
  constructor() {
    this.view = new GenreView();
  }
  init() {
    changeScreen(this.view.element);
    this.view.onStart = () => {
      chooseScreen();
    };
  }
}
