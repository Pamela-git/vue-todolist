// Creiamo una mini app di todolist con html+css+js in Vue
// Features principali:
// un input permette all’utente di scrivere una “cosa da fare”;
// un bottone permette di aggiungere quella cosa alla lista di cose da fare in pagina, come promemoria;
// una volta che l’utente ha ipoteticamente svolto l’attività, grazie ad un bottone (X) può eliminare quella determinata cosa dalla lista.


var app = new Vue ({
  el: "#root",
  data: {
    icon: "fas fa-check",
    message: "",
    list: [
      "Sfamare il Porcellino d'India",
    ]
  },
  methods: {
    toDo: function () {
      if (this.message==="") {
        alert("Scrivi qualcosa da fare")
      } else if (this.list.includes(this.message)){
        alert("guarda bene, l'hai già inserito!")
      } else {
        this.list.push(this.message);
        console.log(this.list);
      }
    } ,
    hide: function(i) {
      this.list.splice(i,1);
    },
  }


})
