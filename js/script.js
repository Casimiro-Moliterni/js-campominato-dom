// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Consigli del giorno:  :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Trovate allegato gli screenshot con e senza bonus e il logo da usare nell'header.

// botton di avvio partita 


const mygrid = document.querySelector('.grid');
const GenBtn = document.querySelector('.btn');
GenBtn.addEventListener('click', general);

// funzione generale 
function general(){

    
    for (let i = 1; i <= 100; i++) {


        const thisElemnt = i ;
        generateGridbox=thisElemnt;
        
    };
}
   



// Funzione che genera un quadrato
// number -> numero che rappresenta un numero
// return: elemento del dom che rappresenta un quadrato
function generateGridbox(number) {


    const myDiv = document.createElement('div');
    myDiv.classList.add('box');
    myDiv.innerHTML = `<span>${number}</span>`;

    // funzione al click del box
    myDiv.addEventListener('click', function () {
        this.classList.toggle('color-skyblue');
        console.log('hai cliccato la cella numero :', number);
    });
    return myDiv;
};

// funzione ciclo di 100