export default class Alarm {
  constructor(root) {
    root.innerHTML = Alarm.getHTML();

    //TODO => Mettre en place l'enclenchement de l'alarme définie
    //TODO => Parcourir le tableau et comparer l'alarme définie à l'heure actuelle.

    this.el = {
      affichage: root.querySelector(".alarm-display"),
      hoursInput: root.querySelector("#hourInput"),
      minutesInput: root.querySelector("#minuteInput"),
      alarmActive: root.querySelector(".alarm-active"),
      setAlarmBtn: root.querySelector("#set"),
      addAlarm: root.querySelector(".setAlarm-container"),
      alarmList: root.querySelector(".alarm-list"),
      deleteAlarm: root.querySelector(".remove-btn"),
      controller: root.querySelector(".controller"),
    };

    let count = 1;
    this.alarmsArray = [];
    let alarmSound = new Audio("../assets/media/alarm.mp3");
    alarmSound.loop = true;
    let alarmTimeOut = null;

    setInterval(() => {
      this.displayAlarm();
    }, 1000);

    // Effacer l'alarme sur laquelle on click
    this.el.alarmList.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove-btn")) {
        e.target.parentElement.remove();
      }
    });

    // Au click sur 'Ajouter Alarme' on définit les paramètres de l'alarme à enregistrer
    this.el.setAlarmBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let alarmHour = this.formatTime(this.el.hoursInput.value);
      if (alarmHour === "0") {
        alarmHour = "00";
      }
      let alarmMinutes = this.formatTime(this.el.minutesInput.value);
      if (alarmMinutes === "0") {
        alarmMinutes = "00";
      }

      const alarm = `${alarmHour}:${alarmMinutes}`;

      if (alarm) {
        if (!alarmsArray.includes(alarm)) {
          alarmsArray.push(alarm);
          this.showNewAlarm(alarm);
        } else {
          alert(`Alarme à ${alarm} déjà existante`);
        }
      } else {
        alert(`Enregistrement invalide`);
      }
    });
  }
  //Fonction permettant de lancer l'alarme
  ringing(now) {
    alert(`HELLOOOOOOO il est ${now}`);
  }

  // Fonction pour arreter l'alarme
  clearAlarm() {
    /* const inj = `
    <button class="remove-btn">STOP</button>
    `;
    this.el.controller.innerHTML += inj; */
    alarmSound.pause();
    if (alarmTimeOut) {
      clearTimeout(alarmTimeOut);
      alert("Alarme éteinte");
    }
  }

  // Fonction Affichage du temps
  displayAlarm() {
    let date = new Date();
    const hour = this.formatTime(date.getHours());
    const minutes = this.formatTime(date.getMinutes());
    const secondes = this.formatTime(date.getSeconds());

    const now = `${hour}:${minutes}:${secondes}`;

    this.el.affichage.innerText = now;

    //Lancement du reveil si l'heure actuel est égal à celle définie
    if (this.alarmsArray.includes(now) && count === 1) {
      count = count + 1;
      ringing(now);
    } else if (secondes === 59) {
      count = 1;
    }
  }

  // Format de l'heure
  formatTime(time) {
    if (time < 10 && time.length != 2) {
      return "0" + time;
    } else {
      return time;
    }
  }

  //Affichage d'une alarme
  showNewAlarm(alarm) {
    const inj = `
    <li class="time-list">
            <span class="time">${alarm}</span>
            <button class="remove-btn" id="delete-button">Effacer</button>
          </li>
    `;
    this.el.alarmList.innerHTML += inj;
  }

  static getHTML() {
    return `
    <div class="reveil">
    <div class="wrapper">
        <div class="alarm-display">
        </div>
        <div class="inputs-container">
          <div class="inputs">
            <input type="number" placeholder="00" id="hourInput" min="0" max="23">
            <input type="number" placeholder="00" id="minuteInput" min="0" max="59">
          </div>
          <div class="controller">
          <button id="set" class="add-btn">Ajouter Alarme</button>
          </div>
        </div>
        <div>
        <h3 class="alarm-title">Alarmes Programées</h3>
      </div>
      <div>
        <ul class="alarm-list"></ul>
      </div>
      </div>
      </div>
    `;
  }
}
