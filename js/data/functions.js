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
export const setTryValue = (game, questionResult) => {
  if (questionResult < 0) {
    throw new RangeError(`Can't set negative seconds`);
  }
  const newGame = Object.assign({}, game);
  newGame.try = questionResult;
  return newGame;
};
export const setTry = (data) => {
  if (data.try > 0) {
    data.try = +data.try - 1;
  } else {
    data.try = 9;
  }
};
export const setTrueAnswer = (element, data, track) => {
  let dataNew = 0;
  if (element === true) {
    Object.values(track).map((elem) => {
      if (elem === true) {
        dataNew += 1;
      } else {
        dataNew -= 1;
      }
    });
  } else {
    Object.values(track).map((elem) => {
      if (elem === true) {
        dataNew -= 1;
      } else {
        dataNew += 1;
      }
    });
  }
  return dataNew;
};
const setIndex = (arr) => {
  let lenght = 0;
  const index = arr.findIndex((div) => {
    lenght += 1;
    if (div.time === 10 && div.answers === 8) {
      return div;
    }
    return false;
  });
  return ((lenght - index) / lenght) * 100;
};
export const setPercent = (statistics, data) => {
  statistics.push({time: 10, answers: 8});
  statistics.sort((a, b) => {
    if (a.time > b.time) {
      return 1;
    }
    if (a.time < b.time) {
      return -1;
    }
    return 0;
  });
  statistics.sort((a, b) => {
    if (a.answers < b.answers) {
      return 1;
    }
    if (a.answers > b.answers) {
      return -1;
    }
    return 0;
  });

  return setIndex(statistics);
};
export const setTimerSecond = (val) => {
  let minuteCount = 0;
  const minutes = () => {
    return minuteCount++;
  };
  return {
    minutesResult: setInterval(minutes, 60000)
  };
};

export const setTimerMinute = (val) => {
  let secondsCount = 0;
  const seconds = () => {
    return secondsCount++;
  };
  return {
    secondsResult: setInterval(seconds, 1000),
  };
};
