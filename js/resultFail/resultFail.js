import ResultFailView from './resultFail-view';
import welcome from '../welcome/welcome';
import {changeScreen} from '../changeScreen';

export default () => {
  const myResultFailView = new ResultFailView();
  myResultFailView.onStart = () => {
    const element = welcome();
    changeScreen(element);
  };
  return myResultFailView.element;
};
