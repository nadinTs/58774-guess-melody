import changeScreen from './changeScreen';
import answer from './answer';
import player from './player';
import {data} from './data/data';
import {headElement} from './head';

const screenMainLevelArtist = () => `<section class="main main--level main--level-artist">
  ${headElement}
  <div class="main-wrap">
    <div class="main-timer"></div>

    <h2 class="title main-title">${data.question}</h2>
    <div class="player-wrapper"></div>
    <form class="main-list">  
    ${Object.keys(data.artist).map((element) => `<div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="answer-1" name="answer" value="val-1" />
        <label class="main-answer" for="answer-1">
          <img class="main-answer-preview" src="">
          ${element}
        </label>
      </div>`).join(``)}
    </form>
  </div>
</section>`;

export default () => {
  changeScreen(screenMainLevelArtist());
  const playerWrapper = document.querySelector(`.player-wrapper`);
  player(playerWrapper, Object.keys(data.track[`a-3`]), true, true);
  answer();
};
