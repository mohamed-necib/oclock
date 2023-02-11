export default class Heure {
  constructor(root) {
    root.innerHTML = Heure.getHTML();

    this.el = {
      affichageHeure: root.querySelector(".heures"),
      affichageDate: root.querySelector(".date"),
    };

    setInterval(() => {
      this.displayHeure();
    }, 1000);
    this.displayDate();
  }

  //FONCTION POUR AFFICHAGE DE L'HEURE
  displayHeure() {
    let now = new Date();
    let heures = now.getHours();
    let formatedHour = heures.toString().padStart(2, "0");

    let minutes = now.getMinutes();
    let formatedMinutes = minutes.toString().padStart(2, "0");

    let seconds = now.getSeconds();
    let formatedSeconds = seconds.toString().padStart(2, "0");

    let time = `${formatedHour}:${formatedMinutes}:${formatedSeconds}`;

    this.el.affichageHeure.textContent = time;
  }

  // FONCTION POUR AFFICHAGE DE LA DATE
  displayDate() {
    //Set la date actuelle:
    let today = new Date();
    //Set de l'année actuelle:
    let annee = today.getFullYear();

    //Liste des mois
    let listeMois = [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ];

    //Set du mois en cours
    let mois = listeMois[today.getMonth()];

    //Liste des jours de la semaine:
    let listeJours = [
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
      "Dimanche",
    ];
    //Set de l'index du jour
    let jourNumero = today.getDate();

    //Transformation de l'index en jour correspondant
    let jourNom = listeJours[today.getDay() - 1];

    const date = `${jourNom} ${jourNumero} ${mois} ${annee}`;

    this.el.affichageDate.textContent = date;
  }

  static getHTML() {
    return `
    <div class="horloge">
    <div class="heures">14:50</div>
    <div class="date">Hello World</div>
    </div>
    `;
  }
}

// Faire entrer la piece montée par la porte coulissante
