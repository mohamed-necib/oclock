export default class Timer {
  constructor(root) {
    root.innerHTML = Timer.getHTML();

    this.el = {
      minutes: root.querySelector("#minutes"),
      secondes: root.querySelector("#secondes"),
      inputValue: root.querySelector("#set-minutes"),
      controlPlayPause: root.querySelector(".timer-button-control"),
      showPopBtn: root.querySelector(".timer-button-setter"),
      closePopBtn: root.querySelector(".close-pop"),
      popModal: root.querySelector(".popup"),
      addMinute: root.querySelector(".up"),
      lessMinute: root.querySelector(".down"),
    };

    //TODO => METTRE ALERT EN PLACE LORSQUE LE TEMPS ARRIVE A ZERO

    this.interval = null;
    this.secondesRestantes = 0;

    this.el.controlPlayPause.addEventListener("click", () => {
      if (this.interval === null) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    });

    this.el.closePopBtn.addEventListener("click", () => {
      const inputMinutes = this.el.inputValue.value;
      if (inputMinutes < 60) {
        this.stopTimer();
        this.secondesRestantes = inputMinutes * 60;
        this.displayTime();
      }
      this.closePopup();
    });

    this.el.showPopBtn.addEventListener("click", () => {
      this.openPopUp();
    });

    this.el.addMinute.addEventListener("click", () => {
      this.secondesRestantes = this.secondesRestantes+60;
      this.displayTime();
    });

    this.el.lessMinute.addEventListener("click", () => {
      if (this.secondesRestantes === 0) {
        return;
      } else {
        this.secondesRestantes = this.secondesRestantes - 60;
        this.displayTime();
      }
    });
  }

  //Fonction affichage temps
  displayTime() {
    const minutes = Math.floor(this.secondesRestantes / 60);
    const seconds = this.secondesRestantes % 60;

    // On rajoute un zero tant qu'il n'y a pas de dizaine.
    this.el.minutes.textContent = minutes.toString().padStart(2, "0");
    this.el.secondes.textContent = seconds.toString().padStart(2, "0");
  }

  //Fonction Mise à jour des boutons de controle
  updateControls() {
    if (this.interval === null) {
      this.el.controlPlayPause.innerHTML = `<span class="material-symbols-outlined">play_circle</span>`;
      this.el.controlPlayPause.classList.add("timer-button-start");
      this.el.controlPlayPause.classList.remove("timer-button-stop");
    } else {
      this.el.controlPlayPause.innerHTML = `<span class="material-symbols-outlined">pause</span>`;
      this.el.controlPlayPause.classList.add("timer-button-stop");
      this.el.controlPlayPause.classList.remove("timer-button-start");
    }
  }

  //Fonction lancement minuterie
  startTimer() {
    if (this.secondesRestantes === 0) return;

    this.interval = setInterval(() => {
      this.secondesRestantes--;
      this.displayTime();

      if (this.secondesRestantes === 0) {
        this.stopTimer();
        alert;
      }
    }, 1000);

    this.updateControls();
  }

  //Fonction arrêt minuterie
  stopTimer() {
    clearInterval(this.interval);

    this.interval = null;

    this.updateControls();
  }

  // Fonction Ouverture PopUp
  openPopUp() {
    this.el.popModal.classList.add("open-popup");
  }
  closePopup() {
    this.el.popModal.classList.remove("open-popup");
  }

  static getHTML() {
    return `
      <div class="minuteur">
        <div class="timer-container">
            <div class="panel-container">
              <button class="timer-button timer-button-control timer-button-start">
                <span class="material-symbols-outlined">play_circle</span>
              </button>
              <button class="timer-button timer-button-setter">
                <span class="material-symbols-outlined"> timelapse </span>
              </button>
              <button class="timer-button">
                <span class="material-symbols-outlined up"> arrow_upward </span>
              </button>
              <button class="timer-button">
                <span class="material-symbols-outlined down"> arrow_downward </span>
              </button>
            </div>
            <!-- POPUP CARD -->
            <div class="popup" id="popup">
              <span class="material-symbols-outlined"> timelapse </span>
              <h2>Sélectionner le temps souhaité</h2>
              <input type="text" name="" id="set-minutes">
              <button class="close-pop" type="button">OK</button>
            </div>
            <div class="timer">
              <div class="circle">
                <div class="time">
                  <p id="minutes">00</p>
                  <p>:</p>
                  <p id="secondes">00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  `;
  }
}
