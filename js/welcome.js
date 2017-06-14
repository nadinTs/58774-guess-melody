import changeScreen from './changeScreen';
import artist from './artist';

export default (data) => {
  const screenWelcome = `
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>${data.welcome.title}</h1></section>
    <button class="main-play">${data.welcome.play}</button>
    <h2 class="title main-title">${data.welcome.rulesTitle}</h2>
    <p class="text main-text">${data.welcome.rulesText}
    </p>
  </section>`;
  changeScreen(screenWelcome);
  const buttonPlay = document.querySelector(`.main-play`);
  buttonPlay.onclick = () => {
    artist(data);
  };
};
