import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const playerBox = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(playerBox);
const DATA_TIME_AFTER_PAUSE = 'time-after-pause';

player.setCurrentTime(localStorage.getItem(DATA_TIME_AFTER_PAUSE));

player.on('timeupdate', throttle(savePauseTimeInMemory, 1000));

function savePauseTimeInMemory(data) {
  localStorage.setItem(DATA_TIME_AFTER_PAUSE, data.seconds);
}
