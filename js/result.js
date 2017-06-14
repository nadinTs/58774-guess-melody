import welcome from './welcome';
import changeScreen from './changeScreen';
import dataResult from './dataResult';

function result() {
  const screenMainResult = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За ${dataResult.minute} минуты<br>вы отгадали ${dataResult.right} мелодии</div>
    <span class="main-comparison">Это лучше чем у ${dataResult.percent}% игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;
  changeScreen(screenMainResult);
  const btnReturn = document.querySelector(`.main-replay`);
  btnReturn.onclick = welcome;
}

export default result;
