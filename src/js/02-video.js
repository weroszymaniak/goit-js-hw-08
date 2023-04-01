import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const player = new Vimeo.Player('vimeo-player');

player.on('loaded', () => {
  const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);
  player.setCurrentTime(currentTime);
});

player.on(
  'timeupdate',
  _throttle(({ seconds }) => {
    localStorage.setItem(LOCALSTORAGE_KEY, seconds);
  }, 1000)
);
