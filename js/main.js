(function () {

  const app = document.querySelector(`div.app`);
  const main = app.querySelector(`section.main`);
  const template = document.querySelector(`template`);
  const templateContainer = `content` in template ? template.content : template;
  const screen = templateContainer.querySelectorAll(`section.main`);
  const screenArr = [];

  [].forEach.call(screen, function (div) {
    screenArr.splice(0, 0, div);
  });
  const reversScreen = screenArr.splice(4, 1);
  screenArr.splice(1, 0, reversScreen[0]);

  let element = main.appendChild(screenArr[0]);
  let i = 0;
  const changeScreen = function (event) {
    if (event.altKey && event.keyCode === 39) {
      if (i < screenArr.length - 1) {
        i++;
      } else {
        i = 0;
      }
      main.replaceChild(screenArr[i], element);
      element = screenArr[i];
    }
  };

  document.body.onkeydown = changeScreen;
})();
