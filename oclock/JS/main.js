import Heure from "./Heure.js";
import Timer from "./Timer.js";
import Chrono from "./Chrono.js";
import Alarm from "./Alarm.js";

const heureLink = document.getElementById("horloge");

const timerLink = document.getElementById("minuteur");

const chronoLink = document.getElementById("chrono");

const alarmLink = document.getElementById("reveil");

heureLink.addEventListener("click", () => {
  new Heure(document.querySelector(".component"));
});

timerLink.addEventListener("click", () => {
  new Timer(document.querySelector(".component"));
});

chronoLink.addEventListener("click", () => {
  new Chrono(document.querySelector(".component"));
});

alarmLink.addEventListener("click", () => {
  new Alarm(document.querySelector(".component"));
});
