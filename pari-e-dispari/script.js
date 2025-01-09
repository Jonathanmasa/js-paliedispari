// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// inserimento pari o dispari utente

// L’utente sceglie pari o dispari.
let scelta = prompt("scegli pari o dispari:");
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let numeroUtente = parseInt(prompt("inserisci numero da 1 a 5:"));

console.log("l'utente ha scelto:", scelta);
console.log("numero scelto:", numeroUtente);


// genero un numero casuale
function generoNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroComputer = generoNumero(1, 5);

console.log("il numero estratto dal computer è:", numeroComputer);


// somma dei due numeri
const sommaNumeri = numeroUtente + numeroComputer;

console.log("la somma dei numeri è:", sommaNumeri);

// somma pari o dispari
function verificaPariDispari(sommaGiocata) {
    if (sommaGiocata % 2 === 0) {

        return "pari";
    }else {
        return "dispari";
    }
}

const risultatoPariDispari = verificaPariDispari(sommaNumeri);

console.log("la somma dei numeri è:", risultatoPariDispari);

// dichiaro vincitore

if ((risultatoPariDispari === "pari" && scelta === "pari") || (risultatoPariDispari === "dispari")) {
    console.log("hai vinto!");
    
}else {
    console.log("hai perso");
    
}


    
  




