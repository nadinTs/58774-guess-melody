import {changeScreen} from './changeScreen';
import artist from './artist';
import {changeableData} from './data/data'
import changeTime from './changeTime';

const screenWelcome = (text) => `
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>${text.title}</h1></section>
    <button class="main-play">${text.play}</button>
    <h2 class="title main-title">${text.rulesTitle}</h2>
    <p class="text main-text">${text.rulesText}
    </p>
  </section>`;

export default (data) => {
  changeScreen(screenWelcome(data.welcome));
  const buttonPlay = document.querySelector(`.main-play`);
  buttonPlay.onclick = () => {
    artist();
    changeTime(changeableData);
  };
};
