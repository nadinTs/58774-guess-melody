import {changeScreen} from './changeScreen';
import answer from './answer';
import {data, track, changeableData} from './data/data';
import {header} from './head';

const screenMainLevelGenre = () => `<section class="main main--level main--level-genre">
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
  changeScreen(screenMainLevelGenre(), header(), changeableData);
  answer();
};
