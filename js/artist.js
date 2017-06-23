import {changeScreen} from './changeScreen';
import answer from './answer';
import {data} from './data/data';
import {refreshHeader} from './head';
import './timer.js';

const screenMainLevelArtist = () => `<section class="main main--level main--level-artist">
  <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
  
  </svg>
  <div class="main-wrap">
    <div class="main-timer"></div>

    <h2 class="title main-title">${data.question}</h2>
    <div class="player-wrapper"></div>
    <form class="main-list">  
    ${Object.keys(data.artist).map((element) => `<div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="answer-1" name="answer" value="val-1" />
        <label class="main-answer" for="answer-1">
          <img class="main-answer-preview" src="">
          <span>${element}</span>
        </label>
      </div>`).join(``)}
    </form>
  </div>
</section>`;

export default () => {
  changeScreen(screenMainLevelArtist(), refreshHeader);
  answer();
};

