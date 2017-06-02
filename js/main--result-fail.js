const getElementFromTemplate = (template) => {
  const container = document.createElement(`div`);
  container.innerHTML = template;
  return container;
};

const screenMainResultFail = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Вы проиграли</h2>
    <div class="main-stat">Ничего, вам повезет в следующий раз</div>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

const mainResultFail = getElementFromTemplate(screenMainResultFail);
export default mainResultFail;
