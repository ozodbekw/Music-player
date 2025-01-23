const musicImage = document.getElementById("musicImage");
const heart = document.getElementById("heart");
const backward = document.querySelector("#arrowLeft");
const forward = document.getElementById("arrowRight");
const btnPlay = document.querySelector("#btnPlay");
const btnPause = document.querySelector("#btnPause");
const music = document.getElementById("music");
const playIcon = document.getElementById("playIcon");
const songTitle = document.getElementById("songTitle");
const proccessDuration = document.getElementById("proccessDiv");
const musicTime = document.getElementById("musicTime");
const musicDuration = document.getElementById("musicDuration");
const player = document.querySelector(".player");

const songs = [
  "Konsta - Qahramonlar",
  "Konsta - Sengacha",
  "Konsta - Sevgini izlang",
  "Konsta - Odamlar nima deydi",
];

let songIndex = 0;

function changeMusic(index) {
  music.src = `../music/${songs[index]}.mp3`;
  songTitle.textContent = `${songs[index]}`;
  musicImage.src = `../albums/${songs[index]}.jpg`;
}

function musicPlay() {
  btnPlay.classList.add("hidden");
  btnPause.classList.remove("hidden");
  player.classList.add("playing");
  music.play();
}
function musicPause() {
  btnPlay.classList.remove("hidden");
  btnPause.classList.add("hidden");
  player.classList.remove("playing");
  music.pause();
}

function nextMusic() {
  if (songs.length - 1 <= songIndex) {
    songIndex = -1;
  }
  songIndex++;
  changeMusic(songIndex);

  musicPlay();
}

function prevMusic() {
  if (songIndex <= 0) {
    songIndex = songs.length;
  }
  songIndex--;
  changeMusic(songIndex);
  musicPlay();
}

function toSecond(second) {
  const minutes = Math.floor(second / 60);
  const seconds = Math.floor(second % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function musicPlaying() {
  let duration = music.duration;
  let currentTime = music.currentTime;

  musicTime.textContent = toSecond(currentTime);
  musicDuration.textContent = toSecond(duration);

  proccessDuration.style.width = `${(currentTime / duration) * 100}%`;
}

btnPlay.addEventListener("click", musicPlay);
btnPause.addEventListener("click", musicPause);
forward.addEventListener("click", nextMusic);
backward.addEventListener("click", prevMusic);
music.addEventListener("ended", nextMusic);
music.addEventListener("timeupdate", musicPlaying);

heart.addEventListener("click", () => {
  heart.classList.toggle("like");
});
