import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({seconds}) {
    localStorage.setItem('video-current-time', JSON.stringify(seconds));
}
player.setCurrentTime(localStorage.getItem('video-current-time'));