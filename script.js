let chilometriDaPercorrere;
let etaPasseggero;
let prezzoBiglietto;

let bottone = document.getElementById("bottoneCalcolo")
bottone.addEventListener("click", function () {

    chilometriDaPercorrere=document.getElementById("chilometriBiglietto").value
    etaPasseggero=document.getElementById("etaPasseggero").value

    prezzoBiglietto = (chilometriDaPercorrere * 0.21);
    if (etaPasseggero >= 65) {
        prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto / 100 * 40);
        document.getElementById("ticket-head").classList.remove("bg-danger");
        document.getElementById("ticket-head").classList.add("bg-warning");
        document.getElementById("ticket-head").innerHTML = "<b> Railways Ticket - Senior </b>";
        document.getElementById("ticket-foot").classList.remove("bg-danger");
        document.getElementById("ticket-foot").classList.add("bg-warning");
        document.getElementById("bottoneCalcolo").classList.remove("btn-danger")
        document.getElementById("bottoneCalcolo").classList.add("btn-warning")
    }
    else if (etaPasseggero < 18) {
        prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto / 100 * 20);
        document.getElementById("ticket-head").classList.remove("bg-danger");
        document.getElementById("ticket-head").classList.add("bg-success");
        document.getElementById("ticket-head").innerHTML = "<b> Railways Ticket - Junior </b>";
        document.getElementById("ticket-foot").classList.remove("bg-danger");
        document.getElementById("ticket-foot").classList.add("bg-success");
        document.getElementById("bottoneCalcolo").classList.remove("btn-danger")
        document.getElementById("bottoneCalcolo").classList.add("btn-success")
    }

    prezzoBiglietto = prezzoBiglietto.toFixed(2);
    prezzoBiglietto = prezzoBiglietto+"€"
    console.log(prezzoBiglietto);
    console.log("Buon Viaggio!")

    
    document.getElementById("costoBiglietto").innerHTML="Il prezzo del tuo biglietto è: " + prezzoBiglietto;
})

