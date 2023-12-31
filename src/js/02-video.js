import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

// console.log(throttle);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = localStorage.getItem("videoplayer-current-time")
console.log(currentTime);

player.setCurrentTime(currentTime).then(function(seconds) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds)) 
 })

// player.setCurrentTime(currentTime).then(function(seconds) {
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             break;
//         default:
//             break;
//     }
// });

