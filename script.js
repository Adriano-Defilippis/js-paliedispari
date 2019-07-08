// Creo una funzione per capire se la parola è palindroma;

function parPalindroma(input) {
  var input = prompt("Inserisci una parola palindroma");

  console.log("Input iniziale: ", input);
  while (!isNaN(input) || input == 0){
    console.log("Siamo nel ciclo while se l'input è un numero: ",input);

    alert('I numeri non sono palindromi');

    input = prompt("Inserisci una parola palindroma");
  }

}

console.log(parPalindroma());
