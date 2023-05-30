/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const trovaNumeroMaggiore = (num1, num2) => {
  if (num1 > num2) {
    console.log('il numero più grande è:', num1);
  } else {
    console.log('il numero più grande è:', num2);
  }
};

// Esempi di utilizzo dell'algoritmo
trovaNumeroMaggiore(5, 10); // Output: 10
trovaNumeroMaggiore(15, 7); // Output: 15
trovaNumeroMaggiore(-3, 0); // Output: 0






/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var numero = 10; // numero intero 

if (numero !== 5) {
    console.log("not equal");
} else {
    console.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var numero = 15; // numero da testare 

if (numero % 5 === 0) {
    console.log("divisibile per 5");
} else {
    console.log("non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var numero1 = 4; // Inserisci qui il primo numero intero di tua scelta
var numero2 = 12; // Inserisci qui il secondo numero intero di tua scelta

if (numero1 === 8 || numero2 === 8 || numero1 + numero2 === 8 || numero1 - numero2 === 8) {
    console.log("Condizione soddisfatta");
} else {
    console.log("Condizione non soddisfatta")
     }

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var totalShoppingCart = 60; // Inserisci qui il saldo totale del carrello dell'utente

var costoSpedizione = 10;

if (totalShoppingCart > 50) {
    costoSpedizione = 0;
}

var ammontareTotale = totalShoppingCart + costoSpedizione;

console.log("Ammontare totale da addebitare: " + ammontareTotale);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var totalShoppingCart = 100; // Inserisci qui il saldo totale del carrello dell'utente

var costoSpedizione = 10;
var scontoPercentuale = 0.2;

if (totalShoppingCart > 50) {
    costoSpedizione = 0;
}

var ammontareSconto = totalShoppingCart * scontoPercentuale;
var ammontareTotale = (totalShoppingCart - ammontareSconto) + costoSpedizione;

console.log("Ammontare totale da addebitare: " + ammontareTotale);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var valore = 42; // Inserisci qui il valore che desideri verificare

if (typeof valore === 'number') {
    console.log("Il valore fornito è un numero.");
} else {
    console.log("Il valore fornito non è un numero.");
}

// esempio se si vuole dimostrare che sia una parola 

var valore = "Hello"; // Inserisci qui il valore che desideri verificare

if (typeof valore === 'string') {
    console.log("Il valore fornito è una parola.");
} else {
    console.log("Il valore fornito è una parola.");
}




/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var numero = 7; // Inserisci qui il numero che desideri controllare

if (numero % 2 === 0) {
    console.log("Il numero fornito è pari.");
} else {
    console.log("Il numero fornito è dispari.");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

const me1 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

me.city = 'Toronto';

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var me3 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

delete me.lastName;

console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */


var me3 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

me.skills.pop();
console.log(me);



/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let array2 = []
.1.push('array2')
console.log('array2');



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
