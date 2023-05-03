import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const localKey = 'videoplayer-current-time';

const onPlay = data => {
  const playTime = data.seconds;
  localStorage.setItem(localKey, JSON.stringify(playTime));
};

const timeDef = () => {
  player.setCurrentTime(localStorage.getItem(localKey));
};

player.on('timeupdate', throttle(onPlay, 500));
player.off('play', onPlay);
timeDef();
