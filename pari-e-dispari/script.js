// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// inserimento pari o dispari utente
let scelta = prompt("scegli pari o dispari:");
if (scelta !== "pari" && scelta !== "dispari") {
    console.log("scelta  non valida. scegli pari o dispari.");

    
}else {
    let numeroUtente = parseInt(prompt("inserisci numero da 1 a 5:"));
    if (numeroUtente < 1 || numeroUtente > 5 || isNaN(numeroUtente)) {
        console.log("numero non valido. inserisci un numero tra 1 e 5.");
        
    }else {
        principale(scelta, numeroUtente);
    }
}

// genero un numero casuale
function generoNumero() {
    return Math.floor(Math.random() * 5) + 1;
}

// controllo che il numero sia pari
function numeroPari(numero) {
    return numero % 2 === 0;
}

// funzione principale
function principale(scelta, numeroUtente) {
    // numero casuale computer
    let numeroComputer = generaNumero();
    console.log(`il computer ha scelto il numero ${numeroComputer}.`);

    // sommo i numeri
    let somma = numeroUtente + numeroComputer;
    console.log(`la somma dei numeri è ${somma}.`);

    // somma pari o dispari
    let risultato = èPari(somma) ? "pari" : "dispari";

    // dichiaro il vincitore
    if (risultato === scelta) {
        console.log("hai vinto");
     
    }else {
        console.log("ha vinto il computer");
        
    }

    
    
}
