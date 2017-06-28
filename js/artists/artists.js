import ArtistView from './artists-view';
import {changeableData, data} from '../data/data';
import chooseScreen from '../chooseScreen';
import {setLives, setResult} from '../data/functions';
import {changeScreen} from '../changeScreen';

export default class Artist {
  constructor() {
    this.view = new ArtistView();
  }

  init() {
    changeScreen(this.view.element);

    this.view.onStart = (e) => {
      const element = e.target.parentNode.querySelector(`span`).innerHTML;
      if (data.artist[element] !== true) {
        changeableData.lives = setLives(changeableData);
      } else {
        changeableData.result = setResult(changeableData);
      }
      chooseScreen();
    };
  }
}
