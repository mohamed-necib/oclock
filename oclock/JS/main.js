import Heure from "./Heure.js";

const heureLink = document.getElementById("horloge");

heureLink.addEventListener("click", () => {
  new Heure(document.querySelector(".module"));
});
