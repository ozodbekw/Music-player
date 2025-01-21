const audio = document.getElementById("audio");
const songTitle = document.getElementById("music-title");
const songImage = document.getElementById("music-image");
const backward = document.getElementById("backward");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const forward = document.getElementById("forward");
const musicVolume = document.querySelector(".card__input-volume");
const volumeNumber = document.querySelector(".volume__number");

const songs = [
  "Konsta - Qahramonlar",
  "Konsta - Sengacha",
  "Konsta - Sevgini izlang",
  "Konsta - Odamlar nima deydi",
];

let songIndex = 0;

play.addEventListener("click", () => {
  audio.src = `music/${songs[songIndex]}.mp3`;
  audio.play();
  play.classList.add("hidden");
  pause.classList.remove("hidden");
});
pause.addEventListener("click", () => {
  audio.pause();
  pause.classList.add("hidden");
  play.classList.remove("hidden");
});

forward.addEventListener("click", () => {
  songIndex++;
  audio.src = `music/${songs[songIndex]}.mp3`;
  songImage.src = `albums/${songs[songIndex]}.jpg`;
  songTitle.textContent = songs[songIndex];
  audio.play();
  play.classList.add("hidden");
  pause.classList.remove("hidden");
});

backward.addEventListener("click", () => {
  songIndex--;
  audio.src = `music/${songs[songIndex]}.mp3`;
  songImage.src = `albums/${songs[songIndex]}.jpg`;
  songTitle.textContent = songs[songIndex];
  audio.play();
  play.classList.add("hidden");
  pause.classList.remove("hidden");
});

audio.volume = musicVolume.value / 100;

musicVolume.addEventListener("input", () => {
  audio.volume = musicVolume.value / 100;
  volumeNumber.textContent = musicVolume.value;
});
