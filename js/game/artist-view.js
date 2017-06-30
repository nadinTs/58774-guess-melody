import AbstractView from '../view';
import player from '../player';

let i = 0;
export default class ArtistView extends AbstractView {
  constructor(game) {
    super();
    this.game = game;
    this.answers = this.game.answers;
  }
  get template() {
    return `<section class="main main--level main--level-artist">
      <div class="main-wrap">
        <h2 class="title main-title">${this.game.question}</h2>
        <div class="player-wrapper"></div>
          <form class="main-list">  
            ${this.answers.map((element) => `<div class="main-answer-wrapper">
              <input class="main-answer-r" type="radio" id="answer-${i}" name="answer" value="${element.isCorrect}" />
              <label class="main-answer" for="answer-${i++}">
                <img class="main-answer-preview" src="${element.image.url}" width="${element.image.width}" height="${element.image.height}">
                <span>${element.title}</span>
              </label>
            </div>`).join(``)}
          </form>
        </div>
      </section>`;
  }

  bind() {
    const answerElementArtist = this.element.querySelectorAll(`input.main-answer-r`);
    const answerElementArtistArr = Array.from(answerElementArtist);
    const playerWrapper = this.element.querySelector(`.player-wrapper`);
    player(playerWrapper, this.game.src, false, true);
    const elementArtist = this;
    answerElementArtistArr.forEach(function (div) {
      div.onclick = function (e) {
        elementArtist.onStart(e.target.value === true);
      };
    });
  }

  onStart() {

  }
}
