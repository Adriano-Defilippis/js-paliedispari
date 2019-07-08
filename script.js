// Creo una funzione per capire se la parola è palindroma;

function parPalindroma(input) {
  var input = prompt("Inserisci una parola palindroma");

  console.log("Input iniziale: ", input);

  // Controllo sul tipo di input inserito
  while (!isNaN(input)){

    console.log("Siamo nel ciclo while se l'input è un numero: ",input);

    alert('I numeri non sono palindromi');

    input = prompt("Inserisci una parola palindroma");
  }

}

console.log(parPalindroma());
