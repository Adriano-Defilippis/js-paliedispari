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
function randomNum(max){
  var num = Math.floor(Math.random() * (max) + 1);

  return num;
}

// Funzione per riscontro se la somma dei numeri è pari o dispari e se corrisponde alla scelta utente
function controllo(num1, num2){

  var risultato;

  var somma = num1 + num2;

  console.log("Somma  ", somma);

  if (somma % 2 !== 0){

    risultato = "DISPARI";


  }else{
    risultato = "PARI";
  }

  return risultato;


}

// Esecuzione del codice
var scelta = prompt('Pari o dispari..? Tenta la fortuna').toUpperCase();
var numUtente = randomNum(6);
var numCpu = randomNum(6);


console.log(scelta);

console.log("numUtente:  ",numUtente);

console.log("NumCpu  ", numCpu);

console.log("Somma dei numeri Random: ", controllo(numUtente, numCpu, scelta));

if (controllo(numUtente, numCpu) === scelta) {
  alert('Indovinato');
}else if (controllo(numUtente, numCpu) !== scelta) {
  alert('Riprova');
}
