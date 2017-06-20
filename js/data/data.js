export const data = Object.freeze({
  result: {
    lives: 3,
    answer: 0,
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
    'a-1': {
      'https://www.youtube.com/audiolibrary_download?vid=48cbfd9a4a0bae73': null
    },
    'a-2': {
      'https://www.youtube.com/audiolibrary_download?vid=886cf41f90ad49b6': null
    },
    'a-3': {
      'https://www.youtube.com/audiolibrary_download?vid=d780811abe451ead': true
    },
    'a-4': {
      'https://www.youtube.com/audiolibrary_download?vid=a38a9ebe0a4d5591': true
    }
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

export const changeableData = {
  lives: 3,
  answer: 0,
  try: 10,
  minute: 2,
  seconds: 0,
  percent: 0
};
