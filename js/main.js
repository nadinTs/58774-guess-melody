(function () {

  const app = document.querySelector(`div.app`);
  const main = app.querySelector(`section.main`);
  const template = document.querySelector(`template`);
  const templateContainer = `content` in template ? template.content : template;
  const screen = templateContainer.querySelectorAll(`section.main`);

  const screenArr = Array.from(screen);
  const screen2 = screenArr.splice(4, 1);
  const screen3 = screenArr.splice(3, 1);

  screenArr.splice(0, 0, screen2[0]);
  screenArr.splice(2, 0, screen3[0]);

  let element = main.appendChild(screenArr[0]);
  let i = 0;
  function changeScreen(event) {
    if (event.altKey && event.keyCode === 39) {
      if (i < screenArr.length - 1) {
        i++;
      } else {
        i = 0;
      }
      main.replaceChild(screenArr[i], element);
      element = screenArr[i];
    }
  }

  document.body.onkeydown = changeScreen;
})();
