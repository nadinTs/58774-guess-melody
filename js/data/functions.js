export const setLives = (game, lives) => {
  if (lives < 0) {
    throw new RangeError(`Can't set negative lives`);
  }
  const newGame = Object.assign({}, game);
  newGame.lives = lives;
  return newGame;
};
export const setAnswer = (game, answers) => {
  if (answers < 0) {
    throw new RangeError(`Can't set negative answers`);
  }
  const newGame = Object.assign({}, game);
  newGame.answer = answers;
  return newGame;
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
    let tryNew = +data.try - 1;
    data.try = tryNew;
  } else {
    data.try = 10;
  }
};
