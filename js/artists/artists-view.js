import AbstractView from '../view';
import {data} from '../data/data';
import player from '../player';
import {track} from '../track';

const question = `Кто исполняет эту песню?`;

export default class ArtistView extends AbstractView {

  get template() {
    return `<section class="main main--level main--level-artist">
  <div class="main-wrap">
    <h2 class="title main-title">${question}</h2>
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
  }

  bind() {
    const answerElementArtist = this.element.querySelector(`.main-list`);
    const playerWrapper = this.element.querySelector(`.player-wrapper`);
    player(playerWrapper, Object.keys(track[`a-3`]), false, true);
    answerElementArtist.onclick = (e) => {
      this.onStart(e);
    };
  }

  onStart() {

  }
}
