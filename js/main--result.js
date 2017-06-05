import getElementFromTemplate from './get--element-from-template';

const screenMainResult = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За 2 минуты<br>вы отгадали 4 мелодии</div>
    <span class="main-comparison">Это лучше чем у 80% игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

const mainResult = getElementFromTemplate(screenMainResult);
export default mainResult;
