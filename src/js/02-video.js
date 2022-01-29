import Player from '@vimeo/player';

const playerBox = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(playerBox);
const dataTimeAfterPause = 'time-after-pause';

player.setCurrentTime(localStorage.getItem('time-after-pause'));

player.on('pause', savePauseTimeInMemory);

function savePauseTimeInMemory(data) {
  localStorage.setItem('time-after-pause', data.seconds);
}
