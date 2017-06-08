import changeScreen from './changeScreen';
import mainLevelArtist from './artist';

function welcome() {
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
  changeScreen(screenWelcome);

  const buttonPlay = document.querySelector(`.main-play`);
  buttonPlay.onclick = mainLevelArtist;
}


export default welcome;
