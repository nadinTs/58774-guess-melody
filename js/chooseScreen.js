import result from './result';
import resultFail from './fail';
import artist from './artist';
import getRandom from './getRandom';
import genre from './genre';
import {setTry} from './data/functions';
import {changeableData} from './data/data';

export default (data) => {
  const questionArr = {
    1: artist,
    2: genre
  };
  if (data.try > 0 && data.lives > 0) {
    questionArr[getRandom(2, 1)]();
  } else {
    if (data.try <= 0) {
      result(changeableData);
    } else if (data.lives <= 0) {
      resultFail();
    }
    changeableData.lives = 2;
    changeableData.result = 0;
    changeableData.trueAnswer = 0;
    changeableData.true = 0;
    changeableData.try = 9;
  }
  setTry(data);
};
