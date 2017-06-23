import {changeScreen} from './changeScreen';
import answer from './answer';
import {data, track, changeableData} from './data/data';
import {refreshHeader} from './head';

const screenMainLevelGenre = () => `<section class="main main--level main--level-genre">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle
          cx="390" cy="390" r="370"
          class="timer-line"
          style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
    
    </svg>
    <h2 class="title">${data.genre.title}</h2>
    <form class="genre" style="position: relative; z-index: 1000;">
      ${Object.keys(track).map((element) => `<div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="${element}">
        <label class="genre-answer-check" for="${element}"></label>
        </div>`).join(``)}
      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>`;

export default () => {
  changeScreen(screenMainLevelGenre(), refreshHeader, changeableData);
  answer();
};
