export default class Chrono {
  constructor(root) {
    root.innerHTML = Chrono.getHTML();

    this.el = {
      playButton: document.querySelector(".play"),
      pauseButton: document.querySelector(".pause"),
      lapButton: document.querySelector(".lap-btn"),
      resetButton: document.querySelector(".reset"),
      deletebutton: document.querySelector(".lap-clear-btn"),
      displayLap: document.querySelector(".laps"),
    };

    this.startTime;
    this.timeLapse = 0;
    this.timeInterval;
    this.lapItem = 0;

    this.el.playButton.addEventListener("click", () => {
      this.play();
    });

    this.el.pauseButton.addEventListener("click", () => {
      this.pause();
    });

    this.el.resetButton.addEventListener("click", () => {
      this.reset();
    });

    this.el.lapButton.addEventListener("click", () => {
      this.lap();
    });

    this.el.deletebutton.addEventListener("click", () => {
      this.suppr();
    });
  }

  timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - hh) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formatedMM = mm.toString().padStart(2, "0");
    let formatedSS = ss.toString().padStart(2, "0");
    let formatedMS = ms.toString().padStart(2, "0");

    return `${formatedMM}:${formatedSS}:${formatedMS}`;
  }

  // FONCTION Display TIME

  display(txt) {
    document.getElementById("displayTime").innerHTML = txt;
  }

  // Fonction Toggle pour les boutons play/pause

  toggle(buttonKey) {
    const buttonToShow =
      buttonKey === "play" ? this.el.playButton : this.el.pauseButton;
    const buttonToHide =
      buttonKey === "play" ? this.el.pauseButton : this.el.playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
  }

  printTime() {
    this.timeLapse = Date.now() - this.startTime;
    /* this.display(this.timeToString(this.timeLapse)); */
  }

  // Fonction START

  play() {
    this.startTime = Date.now() - this.timeLapse;
    this.timeInterval = setInterval(
      (this.printTime = () => {
        this.timeLapse = Date.now() - this.startTime;
        this.display(this.timeToString(this.timeLapse));
      }),
      10
    );
    this.toggle("pause");
  }

  // Fonction Pause pour le chrono en Pause
  pause() {
    clearInterval(this.timeInterval);
    this.toggle("play");
  }

  // Fonction Reset pour remettre le chrono à zèro

  reset() {
    clearInterval(this.timeInterval);
    this.display("00:00:00");
    this.toggle("play");
    this.timeLapse = 0;
  }

  // Fonction Lap permettant l'affichage des tours

  lap() {
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timeRecord = document.createElement("span");

    li.setAttribute("class", "lap-items");
    number.setAttribute("class", "number");
    timeRecord.setAttribute("class", "time-record");

    number.innerText = `#${++this.lapItem}`;
    timeRecord.innerHTML = this.timeToString(this.timeLapse);

    li.append(number, timeRecord);
    this.el.displayLap.append(li);
  }

  // Fonction Suppr permettant la suppression des tours enregistrés

  suppr() {
    this.el.displayLap.innerText = "";
    this.el.displayLap.append(this.el.deletebutton);
    this.lapItem = 0;
  }

  static getHTML() {
    return `
    <div class="mode-2">
    <div class="chrono">
    <span class="time" id="displayTime"> 00:00:00 </span>
    </div>
    <div class="controls">
    <button>
    <ion-icon class="play" name="play-outline"></ion-icon>
    <ion-icon class="pause" name="pause-outline"></ion-icon>
    </button>
    <button>
    <ion-icon class="reset" name="refresh-outline"></ion-icon>
    </button>
    <button>
    <ion-icon class="lap-btn" name="save-outline"></ion-icon>
     </button>
     </div>
    <ul class="laps">
    </ul>
    <button class="lap-clear-btn"><p>SUPPRIMER</p></button>
    </div>
    
    `;
  }
}
