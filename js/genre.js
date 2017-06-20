import changeScreen from './changeScreen';
import answer from './answer';
import {data} from './data/data';
import {headElement} from './head';

const screenMainLevelGenre = (genres) => `<section class="main main--level main--level-genre">
  ${headElement}
    <h2 class="title">${genres.genre.title}</h2>
    <form class="genre" style="position: relative; z-index: 1000;">
      ${Object.keys(genres.track).map((track) => `<div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="${track}">
        <label class="genre-answer-check" for="${track}"></label>
        </div>`).join(``)}
      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>`;

export default () => {
  changeScreen(screenMainLevelGenre(data));
  answer();
};
