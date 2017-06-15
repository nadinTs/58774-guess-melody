export default (element) => {
  const app = document.querySelector(`div.app`);
  const main = app.querySelector(`section.main`);
  const section = document.createElement(`section`);
  section.className = `main`;
  section.innerHTML = element;
  app.removeChild(main);
  app.prepend(section);
};
