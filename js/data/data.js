export const data = Object.freeze({
  result: {
    lives: 3,
    answer: 4,
    minute: 2,
    seconds: 0,
    percent: 80
  },
  fail: {
    title: `Угадай мелодию`,
    subtitle: `Вы проиграли`,
    stat: `Ничего, вам повезет в следующий раз`,
    replay: `Сыграть ещё раз`
  },
  track: {
    'a-1': `https://www.youtube.com/audiolibrary_download?vid=48cbfd9a4a0bae73`,
    'a-2': `https://www.youtube.com/audiolibrary_download?vid=886cf41f90ad49b6`,
    'a-3': `https://www.youtube.com/audiolibrary_download?vid=d780811abe451ead`,
    'a-4': `https://www.youtube.com/audiolibrary_download?vid=a38a9ebe0a4d5591`
  },
  artist: {
    'Пелагея': null,
    'Краснознаменная дивизия имени моей бабушки': null,
    'Lorde': true,
  },
  question: `Кто исполняет эту песню?`,
  welcome: {
    title: `Угадай мелодию`,
    play: `Начать игру`,
    rulesTitle: `Правила игры`,
    rulesText: `Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      Удачи!`
  },
  genre: {
    title: `Выберите инди-рок треки`
  }
});

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
