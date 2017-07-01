import ResultFailView from './resultFail-view';
import {changeScreen} from '../changeScreen';
import {app} from '../main';

export default class ResultFail {
  constructor() {
    this.view = new ResultFailView();
  }
  init() {
    changeScreen(this.view.element);
    this.view.onStart = () => {
      location.reload();
      app.showWelcome();
    };
  }
}
