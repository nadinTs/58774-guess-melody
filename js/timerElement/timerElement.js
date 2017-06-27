import TimerElementView from './timerElement-view';

export default () => {
  const mytimerElementView = new TimerElementView();
  mytimerElementView.onStart = () => {
  };
  return mytimerElementView.element;
};
