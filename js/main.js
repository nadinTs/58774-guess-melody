import welcome from './main--welcome';
import changeScreen from './change--screen';

const app = document.querySelector(`div.app`);
const main = app.querySelector(`section.main`);

const main.appendChild(welcome);

document.body.onkeydown = changeScreen;
