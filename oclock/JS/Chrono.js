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

    let startTime;
    let timeLapse = 0;
    let timeInterval;
    let lapItem = 0;
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
    <ul class="laps">    </ul>
    <button class="lap-clear-btn"><p>SUPPRIMER</p></button>
    </div>
    `;
  }
}
