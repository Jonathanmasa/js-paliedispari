// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedere all’utente di inserire una parola
let parola = prompt("inserisci parola:");

// Creare una funzione per capire se la parola inserita è palindroma
function èPalindroma(parola) {

    // trasformo parola in miniscolo e rimuovo spazi
    let parolaPulita = parola.toLowerCase().replace(/\s+/g, '');

    // inverto parola
    let parolaInvertita = parolaPulita.split('').reverse().join('');

    // risultato true se la parola è unguale all'inversa, altrimenti false
    return parolaPulita === parolaInvertita;
}

//  funzione input utente risultato palindroma
if (èPalindroma(parola)) {
    console.log("la parola è palindroma.");
    
//  funzione input utente risultato non palindroma  
} else {
    console.log("la parola non è palindroma.");
    
}
