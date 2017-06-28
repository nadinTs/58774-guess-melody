import ResultView from './resulte-view';
import {changeScreen} from '../changeScreen';
import {app} from '../main';
import {setLocation} from '../data/functions';
import {statistics} from '../data/statistic';
import {setPercent} from '../data/functions';
import {changeableData} from '../data/data';

export default class Result {
  constructor() {
    const urlNew = `#result=${changeableData.seconds},${setPercent(statistics, changeableData)},${changeableData.result}`;
    setLocation(urlNew);
    this.view = new ResultView();
    console.log();
  }

  init() {
    changeScreen(this.view.element);
    this.view.onStart = () => {
      app.showWelcome();
    };
  }
}
