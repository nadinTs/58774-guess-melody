import welcome from './main--welcome';
import artist from './main--level-artist';
import genre from './main--level-genre';
import result from './main--result';
import resultFail from './main--result-fail';

const app = document.querySelector(`div.app`);
const main = app.querySelector(`section.main`);

const screenArr = {
  0: artist,
  1: genre,
  2: result,
  3: resultFail,
  4: welcome
};

let element = screenArr[4];
let i = 0;
const changeScreen = function (event) {
  if (event.altKey && event.keyCode === 39) {
    if (i < 4) {
      i++;
    } else {
      i = 0;
    }
    main.replaceChild(screenArr[i], element);
    element = screenArr[i];
  }
};
export default changeScreen;
