export const createElement = (element) => {
  const section = document.createElement(`section`);
  section.className = `main`;
  section.innerHTML = element;
  return section;
};
