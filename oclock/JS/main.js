import Heure from "./Heure.js";
import Timer from "./Timer.js";
import Chrono from "./Chrono.js";

const heureLink = document.getElementById("horloge");

const timerLink = document.getElementById("minuteur");

const chronoLink = document.getElementById("chrono");

heureLink.addEventListener("click", () => {
  new Heure(document.querySelector(".component"));
});

timerLink.addEventListener("click", () => {
  new Timer(document.querySelector(".component"));
});

chronoLink.addEventListener("click", () => {
  new Chrono(document.querySelector(".component"));
});
