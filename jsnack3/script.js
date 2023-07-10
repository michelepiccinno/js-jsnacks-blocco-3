/*Snack 3 (bonus)
Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno formato
da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.*/

//RECUPERO GLI ELEMENTI HTML INPUT E BUTTON
const numInputElement = document.querySelector("[name='number']");
const btnInvia = document.querySelector(".invia-dati");

//CREO UN EVENT LISTENER CHE AL CLICK SUL BUTTON ESEGUE IL BLOCCO DI CODICE SOTTO RIPORTATO
btnInvia.addEventListener("click", function () {
  // PRELEVO IL CONTENUTO INSERITO NELL'INPUT E LO ASSEGNO ALLA CONST INPUTNUM
  const inputNum = numInputElement.value;

  ///*  ---PRIMA ALTERNATIVA CON 1 WHILE E 1 FOR---
  //DICHIARO L'ARRAY PADRE E GLI ARRAY CHILD
  let arrayContainer = [];
  //IMPOSTO UN WHILE PER CICLARE L'ARRAY CONTAINER
  //ALL'INTERNO INSERISCO UN FOR CHE CICLA OGNI ARRAY CHILD CON INDICE I
  while (arrayContainer.length < inputNum) {
    let arrayNumbers = []; //SI SVUOTA OGNI VOLTA PRIMA DI RIENTRARE NEL CICLO - LA TRATTIAMO COME FOSSEUN ARRAY TEMPORANEA
    for (let i = 0; i < 10; i++) {
      arrayNumbers[i] = (Math.floor(Math.random() * 100));
    }
    arrayContainer.push(arrayNumbers + ' - ');
  }
  //INIETTO ELEMENTO HTML
  const containerMsg = document.querySelector(".box-output-msg");
  const boxValue = document.createElement("h6");
  boxValue.classList.add("output-msg");
  boxValue.innerHTML = `HAI CHIESTO DI GENERARE ${inputNum} ARRAY <BR> ${arrayContainer}`;
  containerMsg.append(boxValue);
  console.log(arrayContainer);
})
