const templ = (element) => {
  const section = document.createElement(`section`);
  section.className = `main`;
  section.innerHTML = element;
  return section;
};

export default (element) => {
  const app = document.querySelector(`div.app`);
  const main = app.querySelector(`section.main`);
  app.removeChild(main);
  app.prepend(templ(element));
};
