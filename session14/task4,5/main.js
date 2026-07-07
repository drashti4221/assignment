import {formatSongTitle,getSongDurationInMinutes} from "./spotifyUtils.js";

const songTitle = "shape of you";
const songDuration = 263;

console.log("Song Title:", formatSongTitle(songTitle));
console.log("Duration:", getSongDurationInMinutes(songDuration));