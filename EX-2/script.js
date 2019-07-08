// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer e
// dichiariamo chi ha vinto.



// Funzione per controllare se l'input corrispinde a pari o dispari
// function controlloInput(input) {
//   var input;
//
//   input;
//
//   console.log("Input iniziale: ", input);
//
//   // Controllo sul tipo di input inserito
//   while (input !== "DISPARI" || input !== "PARI"){
//
//     alert('Devi scegliere o pari o dispari amico bello');
//
//     console.log("Siamo nel ciclo while se imput pari o dispari: ",input);
//
//   }
//
// }


// Funzione per generare numeri random
function randomNum(){
  var num = Math.floor(Math.random() * 11);

  return num;
}

// Funzione per riscontro se la somma dei numeri è pari o dispari e se corrisponde alla scelta utente
function controllo(num1, num2, input){

  var input;

  var somma = num1 + num2;

  var risultato;

  if (somma % 2 !== 0){

    risultato = "DISPARI";


  }else{
    risultato = "PARI";
  }

  return risultato;

  if (risultato === input) {
    alert('Indovinato');
  }else if (risultato !== input) {
    alert('Riprova');
  }


}

// Esecuzione del codice
var scelta = prompt('Pari o dispari..? Tenta la fortuna').toUpperCase();
var numUtente = randomNum();
var numCpu = randomNum();

// controlloInput(scelta);

console.log(scelta);

console.log("numUtente:  ",numUtente);

console.log("NumCpu  ", numCpu);

console.log(controllo(numUtente, numCpu, scelta));
