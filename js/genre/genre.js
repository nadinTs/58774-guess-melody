import GenreView from './genre-view';
import {changeableData} from '../data/data';
import chooseScreen from '../chooseScreen';

export default () => {
  const myGenreView = new GenreView();
  myGenreView.onStart = () => {
    chooseScreen(changeableData);
  };
  return myGenreView.element;
};
