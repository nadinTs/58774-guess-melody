import ResultView from './resulte-view';
import welcome from '../welcome/welcome';
import {changeScreen} from '../changeScreen';

export default () => {
  const myResultView = new ResultView();
  myResultView.onStart = () => {
    changeScreen(welcome());
  };
  return myResultView.element;
};
