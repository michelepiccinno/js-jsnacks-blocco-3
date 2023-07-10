/*Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere 
i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.*/

//CREO UN ARRAY VUOTO
const arrayNum = [];

//RECUPERO GLI ELEMENTI HTML INPUT E BUTTON
const numInputElement = document.querySelector("[name='number']");
const btnInvia = document.querySelector(".invia-dati");

//INIZIALIZZO LA VARIABILE SUM
let sum = 0;
document.getElementById("warning-msg").innerHTML = ('INSERISCI NUMERO: ');
//CREO UN EVENT LISTENER CHE AL CLICK SUL BUTTON ESEGUE IL BLOCCO DI CODICE SOTTO RIPORTATO
btnInvia.addEventListener("click", function () {

  // PRELEVO IL CONTENUTO INSERITO NELL'INPUT E LO ASSEGNO ALLA CONST NUM, POI EFFETTUO L'OPERAZIONE DI SOMMA
  const num = numInputElement.value;

  //SETTO LA CONDIZIONE
  if ((parseInt(num) + sum) < 50) {
    sum += parseInt(num);
    arrayNum.push(num);
    console.log("contenuto dell'array: " + arrayNum);
    console.log("la somma dei numeri nell'array è: " + sum)
    document.getElementById("output-msg").innerHTML = arrayNum;

  } else {
    console.log('non puoi aggiungere altri numeri!');
    document.getElementById("warning-msg").innerHTML = ('non puoi aggiungere altri numeri se la somma totale è superiore a 50! ');
  }
})



