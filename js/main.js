import welcome from './main--welcome';
import changeScreen from './changeScreen';

const app = document.querySelector(`div.app`);
const main = app.querySelector(`section.main`);

main.appendChild(welcome);

document.body.onkeydown = changeScreen;
