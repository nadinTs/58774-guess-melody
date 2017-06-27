import ResultView from './resulte-view';
import {changeScreen} from '../changeScreen';
import App from '../main';

export default class Result {
  constructor() {
    this.view = new ResultView();
  }
  init() {
    changeScreen(this.view.element);
    this.view.onStart = () => {
      App.showWelcome();
    };
  }
}
