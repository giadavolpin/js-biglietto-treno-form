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


const nome = document.getElementById('nome').value;
const km = document.getElementById('km').value;
const age = document.getElementById('age').value;

// salviamo in una variabile il nostro bottone
const bottone = document.getElementById('genera');

//rimaniamo in ascolto di un evento, il click su quel bottone
bottone.addEventListener('click',
  function () {
     // prendiamo il valore dell'input km
     const kmDaPercorrere = document.getElementById('km').value;
     console.log(kmDaPercorrere);
      // prendiamo il valore della select fascia eta
    const fasciaEta = document.getElementById('age').value;
    console.log(fasciaEta);
     // I nostri dati per il calcolo del biglietto
     const prezzoKm = 0.21;
     console.log('prezzo al km', prezzoKm);
     let costoBiglietto = prezzoKm * kmDaPercorrere;
     console.log('costo base biglietto', costoBiglietto);
     //calcoliamo il costo e l'offerta applicata
    if (fasciaEta == 'minorenne') {
        // 20% sconto
        costoBiglietto -= (costoBiglietto * 20 / 100);
        offerta = 'Sconto Minorenne';
  
      } else if (fasciaEta == 'over65') {
        // 40% sconto
        costoBiglietto -= (costoBiglietto * 40 / 100);
        offerta = 'Sconto Silver';
      }
  
      // lasciamo solo due decimali
      costoBiglietto = costoBiglietto.toFixed(2);

  }
  );

  const prezzoBiglietto = 

     // stampiamo
     document.getElementById('nome-passeggero').innerHTML = nome;
     document.getElementById('offerta-applicata').innerHTML = offerta;
     document.getElementById('costo').innerHTML = costoBiglietto + '€';


// salviamo in una variabile il nostro bottone annulla
const bottoneAnnulla = document.getElementById('annulla');
/*
//rimaniamo in ascolto di un evento click sul bottone annulla
bottoneAnnulla.addEventListener('click',
  function () {
    //nascondiamo il biglietto
    document.getElementById('biglietto').className = 'hidden';

    // svuotiamo gli input
    document.getElementById('km').value = '';
    document.getElementById('fascia-eta').value = '';

    // svuotiamo gli altri elementi
    document.getElementById('nome-passeggero').innerHTML = '';
    document.getElementById('offerta-applicata').innerHTML = '';
    document.getElementById('costo').innerHTML = '';
  }
); */