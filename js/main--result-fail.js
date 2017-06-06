import getElementFromTemplate from './get--element-from-template';
import welcome from './main--welcome';
import changeScreen from './changeScreen';

const screenMainResultFail = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Вы проиграли</h2>
    <div class="main-stat">Ничего, вам повезет в следующий раз</div>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

const mainResultFail = getElementFromTemplate(screenMainResultFail);

const btnReturn = mainResultFail.querySelector(`.main-replay`);

const callChangeScreen = () => {
  changeScreen(mainResultFail, welcome);
};

btnReturn.onclick = callChangeScreen;

export default mainResultFail;
