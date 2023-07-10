/*Snack 2
Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. 
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.*/

//DICHIARO UN ARRAY VOTO
const arrayNum = [];

//INSERISCO NELL'ARRAY 50 ELEMENTI UTILIZZANDO UN WHILE (per convenzione definisco valore max=100) 
while (arrayNum.length < 50) {
  const numRandom = Math.floor((Math.random() * 100)+1);
  arrayNum.push(numRandom);
}

//PER LA LETTURA CICLO L'ARRAY UTILIZZANDO UN FOR
for (let i = 0; i < arrayNum.length; i++) {
  console.log(arrayNum[i]);
  //IMPOSTO LA CONDIZIONE IF
  if (arrayNum[i] % 2 === 0) {
    //INIETTO NEL HTML IL VALORE 
    document.getElementById("div-a").innerHTML += arrayNum[i] + ', ';
  } else {
    //INIETTO NEL HTML IL VALORE 
    document.getElementById("div-b").innerHTML += arrayNum[i] + ', ';
  }
}

/*---ALTERNATIVA---
LA STRUTTURA DI CONTROLLO CONDIZIONALE IF E' POSSIBILE INSERIRLA DIRETTAMENTE NEL PRIMO WHILE PERTANTO IL FOR E' SUPERFLUO 
IL WHILE SAREBBE STATO STRUTTURATO IN QUESTO MODO:
while (arrayNum.length < 50) {
  const numRandom = Math.floor(Math.random() * 100);
  arrayNum.push(numRandom);
  if (numRandom % 2 === 0) {
    document.getElementById("div-a").innerHTML += numRandom + ', ';
  } else {
    document.getElementById("div-b").innerHTML += numRandom + ', ';
  }
  }
  */