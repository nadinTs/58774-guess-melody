import changeScreen from './changeScreen';
import mainLevelArtist from './artist';
import welcomeText from './welcomeText';

function welcome() {
  const screenWelcome = `<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>${welcomeText.title}</h1></section>
    <button class="main-play">${welcomeText.play}</button>
    <h2 class="title main-title">${welcomeText.rulesTitle}</h2>
    <p class="text main-text">${welcomeText.rulesText}
    </p>
  </section>`;
  changeScreen(screenWelcome);

  const buttonPlay = document.querySelector(`.main-play`);
  buttonPlay.onclick = mainLevelArtist;
}


export default welcome;
