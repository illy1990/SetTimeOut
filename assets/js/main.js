// --------------------------------------------- Ubung 1 ---------------------------------------------

// function describe(name, adress, Wohnort) {
//     // document.write(name + " " + adress + " " + Wohnort)
//     document.write(`Hallo ich bin ${name}, ich wohne in der ${adress} in der Stadt ${Wohnort}`)
// }

// setTimeout(describe, 3000, "Jascha", "Mulvanystraße", "Düsseldorf")


// setTimeout(() => describe("Kevin", "Försterstraße", "Lebach"), 10000)

// --------------------------------------------- Ubung 1 ---------------------------------------------
// --------------------------------------------- Ubung 2 ---------------------------------------------
// let timeID = setTimeout(() => { }, 1000)
// clearTimeout(timeID)

// let i = 0;
// let TimeID1 = setInterval(() => {
//     document.getElementById("MovingBox").style.left = i * 100 + "px";
//     i++;
//     if (i == 10) {
//         clearInterval(TimeID1)
//     }
// }, 20)
// --------------------------------------------- Ubung 2 ---------------------------------------------
// ----------------------- CodeFlow Übung lev1_1: setTimeout setInterval --------------------------------
// Teil 1
// console.log("Start Warten für 3 Sekunden...")

// setTimeout(
//     () => { console.log("Erledigt. Du Hast 3 Sekunden gewartet") }, 3000)

// Teil 2
// setInterval(() => {
//     let Uhrzeit = new Date();
//     console.log(Uhrzeit)
// }, 1000)

// Teil 3

// let Zahler = 10;
// let runterzahlen = setInterval(() => {
//     console.log(Zahler);
//     Zahler--;

//     if (Zahler == 0) {

//         clearInterval(runterzahlen)
//         setTimeout(Warte, 1000)

//     }

// }, 1000)


// function Warte() {
//     console.log("Feierabend")
// }

// ----------------------- CodeFlow Übung lev1_1: setTimeout setInterval --------------------------------
// ----------------------- CodeFlow Übung lev1_2: setTimeout setInterval --------------------------------

// let Zahler = 100;
// function StarTimer() {

//     let Runterzahlen = setInterval(() => {
//         if (Zahler >= 0) {
//             document.querySelector("div div").innerHTML = Zahler + "%";
//             Zahler--;
//         } else if (Zahler == 0) {
//             document.querySelector("div div").innerHTML = Zahler + "%";
//             clearInterval(Runterzahlen)
//         }
//     }, 50)
// }
// ----------------------- CodeFlow Übung lev1_2: setTimeout setInterval --------------------------------

// ----------------------- CodeFlow Übung lev2_1: BOM Meldung --------------------------------


// window.onload = StartTimer();

// function StartTimer() {
//     let Zahler = document.getElementById("count").innerHTML;
//     let Runterzahlen = setInterval(() => {
//         console.log(Zahler)
//         if (Zahler >= 0) {
//             document.getElementById("count").innerHTML = Zahler;
//             Zahler--;
//         } else if (Zahler < 0) {
//             document.getElementById("count").innerHTML = Zahler;
//             document.getElementById("Outputfeld").style.display = "none";
//             clearInterval(Runterzahlen)
//         }
//     }, 1000)
// }

// ----------------------- CodeFlow Übung lev2_1: BOM Meldung --------------------------------

// -------------------------------- CodeFlow Übung lev2_2: Countdown --------------------------------
function startMinCountdown() {
    let wievieleMinuten = document.getElementById("minutes").value;
    let wievieleSekunden = wievieleMinuten * 60;
    console.log(wievieleMinuten)
    console.log(wievieleSekunden)
    Countdown(wievieleSekunden)
    ZählerHinterGrund(wievieleSekunden)
};

//Zweites Pausenurwerk 

let UbergabeRestSekunden;
function ZählerHinterGrund(inputSekunden) {
    let PausenZahler = inputSekunden;
    let HinterGrundIntervall = setInterval(() => {
        if (PausenZahler >= 0) {
            console.log("Ich zähle im Hintergrund weiter " + PausenZahler)
            UbergabeRestSekunden = PausenZahler;
            PausenZahler--;
            pauseMinCountdown(UbergabeRestSekunden)
        } else if (PausenZahler < 0) {
            console.log("Ich zähle im Hintergrund weiter " + PausenZahler)
            UbergabeRestSekunden = PausenZahler;
            clearInterval(HinterGrundIntervall)
            pauseMinCountdown(UbergabeRestSekunden)
        }
    }, 1000)
};



function pauseMinCountdown(UbergabeRestSekunden) {
    console.log("Ich zähle doppelt" + UbergabeRestSekunden)
    if (UbergabeRestSekunden > 0 && document.getElementById("PausenButton").addEventListener("click", true)) {
        console.log("Ich zähle nur wenn geklickt wurde" + UbergabeRestSekunden)
    }
}


//Generelle MINUTEN COUNTDOWN FUNKTION
function Countdown(sekunden) {
    let Runterzahlen = setInterval(() => {
        console.log(sekunden)
        if (sekunden >= 0) {
            let Minutenausgabe = Math.floor(sekunden / 60);
            let Sekundenausgabe = sekunden % 60;
            document.getElementById("time").innerHTML = Minutenausgabe + ":" + Sekundenausgabe;
            sekunden--;
        } else if (sekunden < 0) {
            document.getElementById("time").innerHTML = "00:00";
            clearInterval(Runterzahlen)
        }

    }, 1000)
}
//Generelle MINUTEN COUNTDOWN FUNKTION






function restartMinCountdown() { };


// -------------------------------- CodeFlow Übung lev2_2: Countdown --------------------------------









