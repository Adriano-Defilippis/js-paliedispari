// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer e
// dichiariamo chi ha vinto.



// Funzione per controllare se l'input corrispinde a pari o dispari
function controlloInput(input) {
  var input = input.toUpperCase();

  console.log("Input iniziale: ", input);

  // Controllo sul tipo di input inserito
  if (input !== "DISPARI" || input !== "PARI"){

    alert('Devi scegliere o pari o dispari amico bello');

    input = prompt('Reinserisci la parola');

    console.log("Siamo nel ciclo while se imput pari o dispari: ",input);

  }

}


// Funzione per generare numeri random
function randomNum(){
  var num = Math.floor(Math.random() * 21);

  return num;
}


// Esecuzione del codice
var scelta = prompt('Pari o dispari..? Tenta la fortuna');
var numUtente = randomNum();
var numCpu = randomNum();

controlloInput(scelta);

console.log(numUtente);

console.log(numCpu);
