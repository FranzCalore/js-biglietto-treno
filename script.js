let chilometriDaPercorrere=prompt("Quanti chilometri devi percorrere?");
let etaPasseggero=prompt("Quanti anni ha il passeggero?");
let sconto;
let prezzoBiglietto;

prezzoBiglietto = (chilometriDaPercorrere*0.21);
if (etaPasseggero>=65){
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto/100*40);
}
else if (etaPasseggero<18) {
    prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto/100*20);
}

prezzoBiglietto = prezzoBiglietto.toFixed(2);
console.log (prezzoBiglietto + "€");