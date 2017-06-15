import changeScreen from './changeScreen';
import answer from './answer';

export default (data) => {
  const screenMainLevelGenre = `<section class="main main--level main--level-genre">
    <h2 class="title">${data.genre.title}</h2>
    <form class="genre">
      ${[...Object.entries(data.track)].map(([track]) => `<div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="${track}">
        <label class="genre-answer-check" for="${track}"></label>
        </div>`).join(``)}
      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>`;
  changeScreen(screenMainLevelGenre);
  answer(data);
};
