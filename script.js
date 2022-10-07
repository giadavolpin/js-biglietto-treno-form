/* 
Chiedo all'utente numero km 
chiedo all'utente la sua età
prezzo al km 0.21
calcolare prezzo biglietto (numeroKM * prezzoKm)
sconto under 18 0.20
sconto over 65 0.40
se utente età under 18 prezzo biglietto 
    prezzoBiglietto * sconto Under18 
Altrimenti se utente età over65 prezzo biglietto prezzoBiglietto
    prezzoBiglietto * scontoOver65
*/
const btn = document.getElementById ('calcola');
const prezzoKm = 0.21
const scontoUnder18 = 0.20
const scontoOver65 = 0.40 
let prezzoBiglietto = numeroKm * prezzoKm


const calcolaBiglietto = function () {
    let km = document.getElementById ('km').value;
    let age = document.getElementById ('age').value;
    console.log (km);
    console.log (age);
    
    if(isNaN (numeroKm) || isNaN(etaUtente)) {
            alert('devi inserire numeri');

    if(etaUtente <= 18){
        prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * scontoUnder18)
        messaggio += ` ${prezzoBiglietto}€ Hai ricevuto uno sconto del 20%`;

    } else if (etaUtente >= 65){
        prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto + scontoOver65)
        messaggio += ` ${prezzoBiglietto.toFixed(2)} € Hai ricevuto uno sconto del 40%`;
    } else {
        messaggio += ` ${prezzoBiglietto.toFixed(2) } €` 
    }
}

btn.addEventListener ('click, calcolaBiglietto');

let messaggio = `
<h1> Il costo del tuo biglietto è: </h1> `;
  


document.getElementById('biglietto').innerHTML += messaggio;