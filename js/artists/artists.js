import ArtistView from './artists-view';
import {changeableData, data} from '../data/data';
import chooseScreen from '../chooseScreen';
import {setLives, setResult} from '../data/functions';

export default () => {
  const myArtistView = new ArtistView();
  myArtistView.onStart = (e) => {
    const setTrueScreen = () => {
      const element = e.target.parentNode.querySelector(`span`).innerHTML;
      if (data.artist[element] !== true) {
        changeableData.lives = setLives(changeableData);
      } else {
        changeableData.result = setResult(changeableData);
      }
      chooseScreen(changeableData);
    };
    setTrueScreen();
  };
  return myArtistView.element;
};
