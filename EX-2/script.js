// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer e
// dichiariamo chi ha vinto.



// Funzione per controllare se l'input corrispinde a pari o dispari
function controlloInput(input) {
  var input;

  input;

  console.log("Input iniziale: ", input);

  // Controllo sul tipo di input inserito
  if (input !== "DISPARI" || input !== "PARI"){

    alert('Devi scegliere o pari o dispari amico bello');

    prompt = ("Devi digitare o pari o dispari")

    console.log("Siamo nel ciclo while se imput pari o dispari: ",input);

  }

}


// Funzione per generare numeri random
function randomNum(){
  var num = Math.floor(Math.random() * 21);

  return num;
}

// Funzione per riscontro se la somma dei numeri è pari o dispari e se corrisponde alla scelta utente
function controllo(num1, num2){

  var somma = num1 + num2;

  var risultato;

  if (somma % 2 !== 0){

    risultato = "DISPARI";

    console.log(risultato);

  }else{
    risultato = "PARI";
  }

  return risultato;

}

// Esecuzione del codice
var scelta = prompt('Pari o dispari..? Tenta la fortuna').toUpperCase();
var numUtente = randomNum();
var numCpu = randomNum();

controlloInput(scelta);

console.log(numUtente);

console.log(numCpu);

controllo(numUtente, numCpu);
