// Funzione per controllare se l'input inserito è una stringa
function controlloInput(input) {
  var input;


  var messaggio;


  console.log("Input iniziale: ", input);

  // Controllo sul tipo di input inserito
  while (!isNaN(input)){

    alert('I numeri non sono palindromi');

    input = prompt('Reinserisci la parola');

    console.log("Siamo nel ciclo while se l'input è un numero: ",input);

  }


}


// Creo una funzione per capire se la parola è palindroma;
function parPalindroma(input){

  var input;
  var messaggio;
  var reverseStr = '';

  for(var i = input.length-1; i>= 0; i--){
    reverseStr += input[i];
}

console.log("Stringa reversata  ",reverseStr);

  // Confronto tra stringa inserita e stringa reversata
  if(reverseStr !== input){

    messaggio = "La parola inserita non risulta essere palindroma";
    alert(messaggio);

    console.log('La stringa non è palindroma');

  }
  else{
    messaggio = 'La stringa è Palindroma!'
    alert(messaggio)
  }

}




var parola  = prompt("Inserisci una parola palindroma");

controlloInput(parola);

parPalindroma(parola);
