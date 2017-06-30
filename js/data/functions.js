export const setLives = (data, lives) => {
  if (lives < 0) {
    throw new RangeError(`Can't set negative lives`);
  }
  const newData = Object.assign({}, data);
  if (newData.lives > 0) {
    newData.lives = +newData.lives - 1;
  }
  return newData.lives;
};
export const setResult = (data, value) => {
  if (value < 0) {
    throw new RangeError(`Can't set negative results`);
  }
  const newData = Object.assign({}, data);
  newData.result += 1;
  return newData.result;
};
export const setMinutes = (game, minute) => {
  if (minute < 0) {
    throw new RangeError(`Can't set negative minute`);
  }
  const newGame = Object.assign({}, game);
  newGame.minute = minute;
  return newGame;
};
export const setSeconds = (game, seconds) => {
  if (seconds < 0) {
    throw new RangeError(`Can't set negative seconds`);
  }
  const newGame = Object.assign({}, game);
  newGame.seconds = seconds;
  return newGame;
};
export const setStatisticAnswer = (game, answerResult) => {
  if (answerResult < 0) {
    throw new RangeError(`Can't set negative seconds`);
  }
  const newGame = Object.assign({}, game);
  newGame.answers = answerResult;
  return newGame;
};
export const setStatisticTime = (game, timeResult) => {
  if (timeResult < 0) {
    throw new RangeError(`Can't set negative seconds`);
  }
  const newGame = Object.assign({}, game);
  newGame.answers = timeResult;
  return newGame;
};
export const setAttemptValue = (game, questionResult) => {
  if (questionResult < 0) {
    throw new RangeError(`Can't set negative question`);
  }
  const newGame = Object.assign({}, game);
  newGame.attempt = questionResult;
  return newGame;
};
export const setAttempt = (data) => {
  if (data.attempt > 0) {
    data.attempt = +data.attempt - 1;
  } else {
    data.attempt = 9;
  }
};
export const setTrueAnswer = (element, answer, right) => {
  let dataNew = 0;
  if (element === true) {
    if (answer === right) {
      dataNew += 1;
    } else {
      dataNew -= 1;
    }
  } else {
    if (answer === right) {
      dataNew -= 1;
    } else {
      dataNew += 1;
    }
  }
  return dataNew;
};
const setIndex = (arr, data) => {
  let lenght = 0;
  arr.forEach((div) => {
    lenght += 1;
  });
  const index = arr.findIndex((div) => {
    if (div.time === data.minute && div.answers === data.result) {
      return div;
    }
    return false;
  });
  return Math.round(((lenght - (index + 1)) / lenght) * 100);
};
export const setPercent = (statistics, data) => {
  const statisticsNew = statistics;
  statisticsNew.push({answers: data.answers, time: data.time});
  statisticsNew.sort((a, b) => {
    if (a.time > b.time) {
      return 1;
    }
    if (a.time < b.time) {
      return -1;
    }
    return 0;
  });
  statisticsNew.sort((a, b) => {
    if (a.answers < b.answers) {
      return 1;
    }
    if (a.answers > b.answers) {
      return -1;
    }
    return 0;
  });
  data.percent = setIndex(statisticsNew, data);
  return setIndex(statisticsNew, data);
};
export const setTimerSecond = (data, val) => {
  if (val < 0) {
    throw new RangeError(`Can't set negative question`);
  }
  let SecondCount = +data.seconds;
  SecondCount += 1;
  data.seconds = SecondCount;
  return SecondCount;
};

export const finishGame = (data) => {
  data.minute = `02`;
  data.setSeconds = `00`;
  data.lives = 3;
  data.result = 0;
  data.trueAnswer = 0;
  data.trueAnswerArr = 0;
  data.attempt = 9;
};
export const setLocation = (curLoc) => {
  history.pushState(null, null, curLoc);
};

