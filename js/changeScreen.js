const app = document.querySelector(`div.app`);
const sections = app.querySelector(`.main`);
export const changeScreen = (element) => {
  const section = sections.querySelector(`section.main`);
  if (section) {
    sections.removeChild(section);
  }
  sections.insertAdjacentHTML(`beforeEnd`, element);
};
