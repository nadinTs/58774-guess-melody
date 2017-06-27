export const createElement = (element) => {
  const section = document.createElement(`section`);
  section.className = `main`;
  section.innerHTML = element;
  return section;
};

export const createHead = (element) => {
  const div = document.createElement(`div`);
  div.className = `main-time`;
};
