import welcome from './welcome/welcome';
import {changeScreen} from './changeScreen';

import './animate';
import './time-format';
import './timer.js';

const element = welcome();
changeScreen(element);
