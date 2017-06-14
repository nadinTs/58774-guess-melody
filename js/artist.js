import changeScreen from './changeScreen';
import genre from './genre-level';
import player from './player';
import data from './data';
import dataAnswerArtist from './dataAnswerArtist';

function artist() {
  const screenMainLevelArtist = `<section class="main main--level main--level-artist">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">02</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">00</span>
      </div>
    </svg>

    <div class="main-wrap">
      <div class="main-timer"></div>

      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-1" name="answer" value="val-1" />
          <label class="main-answer" for="answer-1">
            <img class="main-answer-preview" src="">
            ${dataAnswerArtist.pelageya}
          </label>
        </div>

        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-2" name="answer" value="val-1" />
          <label class="main-answer" for="answer-2">
            <img class="main-answer-preview" src="">
            ${dataAnswerArtist.grend}
          </label>
        </div>

        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-2" name="answer" value="val-1" />
          <label class="main-answer" for="answer-2">
            <img class="main-answer-preview" src="">
            ${dataAnswerArtist.lorde}
          </label>
        </div>
      </form>
    </div>
  </section>`;
  changeScreen(screenMainLevelArtist);
  const playerWrapper = document.querySelector(`.player-wrapper`);
  const answer = document.querySelectorAll(`.main-answer-wrapper`);
  const answerArr = Array.from(answer);
  player(playerWrapper, data[`a-1`], true, true);
  answerArr.forEach(function (div) {
    div.onclick = genre;
  });

}

export default artist;
