import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import {
  saveDataToLocalStorage,
  loadLocalStorage,
  removeLocalStorage,
} from './storage';
//

//
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const timeUpdateData = player.on('timeupdate', throttle(onPlay, 1000));
const PLAYER_TIMEUPDATE_KEY = 'videoplayer-current-time';
function onPlay(data) {
    // console.log(data.seconds);
    saveData(data.seconds);
};

function saveData(data) {
    const serializedState = JSON.stringify(data);
    saveDataToLocalStorage(PLAYER_TIMEUPDATE_KEY, serializedState);
};

function getSaveTimeDataAfterRestart() {
    const actualTime = loadLocalStorage(PLAYER_TIMEUPDATE_KEY);
    player.setCurrentTime(actualTime);
};
getSaveTimeDataAfterRestart()
