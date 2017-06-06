import getElementFromTemplate from './get--element-from-template';
import changeScreen from './changeScreen';
import mainLevelArtist from './main--level-artist';

const screenWelcome = `<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      Удачи!
    </p>
  </section>`;

const mainWelcome = getElementFromTemplate(screenWelcome);
const buttonPlay = mainWelcome.querySelector(`.main-play`);

const callChangeScreen = () => {
  changeScreen(mainWelcome, mainLevelArtist);
};
buttonPlay.onclick = callChangeScreen;
export default mainWelcome;
