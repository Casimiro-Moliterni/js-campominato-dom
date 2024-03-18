// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


const mygrid = document.querySelector('.grid');
const GenBtn = document.querySelector('.btn');
GenBtn.addEventListener('click', generateGame);

// funzione generale 
function generateGame(){
     //    svuotare griglia 
     mygrid.innerHTML='';
     const level = document.querySelector('#level').value;
     let numberofBox ;
     let numberoFCellsRow;
    //  bombe generate 
     const numberOfBombs = 16;
//   ciclo x elencare ogni singola bomba 
    // for( let i = 0 ; i < numberRandom.length; i++){
    //     const thisBombs= numberRandom[i];
    //     console.log(thisBombs)
    // }
      
     if(level === 'easy'){
        numberofBox = 100 ;
        numberoFCellsRow = 10 ;
     } else if( level === 'hard'){
        numberofBox = 81 ;
        numberoFCellsRow = 9 ;
     } else{
        numberofBox = 49;
        numberoFCellsRow = 7 ;
     }
    //  console.log(numberofBox)
    const bombs = generateRandomArray(numberOfBombs,1,numberofBox);
     console.log(bombs);

    for (let i = 1; i <= numberofBox; i++) {
        const thisElement = i ;
        const box = generateGridbox(thisElement,numberoFCellsRow,bombs);
    
        mygrid.append(box);    
    };
}
   

// Funzione che genera un quadrato
// number -> numero che rappresenta un numero
// return: elemento del dom che rappresenta un quadrato
function generateGridbox(number,numberoFCells,bombs) {
    const myDiv = document.createElement('div');
    myDiv.classList.add('box');
    myDiv.innerHTML = `<span>${number}</span>`;
    myDiv.style.width= `calc(100% /${numberoFCells})`;
    myDiv.style.height= `calc(100% /${numberoFCells})`;
    // funzione al click del box
    myDiv.addEventListener('click', function () {
        this.classList.toggle('color-skyblue');
        console.log('hai cliccato la cella numero :', number);

        if(bombs.includes(number)){
            alert('hai perso');
        }
    });
    return myDiv;
};



// funzione array number 
function generateRandomArray(arrayLength, numMin, numMax) {
    // Creiamo un array vuoto
    const randomNumbersArray = [];

    // finche non ci sono arrayLength numeri nell'array:
    while(randomNumbersArray.length < arrayLength) {
        // genero un numero random
        const randNumber = getRndInteger(numMin, numMax);
        // se il numero random non esiste nell'array lo pusho
        if(!randomNumbersArray.includes(randNumber)) {
            randomNumbersArray.push(randNumber);
        }
    }
    
    return randomNumbersArray;
}

// funzione numeri random

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

//   funzione per creare bombe 
function generateBombs (bombs,numberOfCells){
    
    const bombsList =[];

    for(let i = 0 ; i < bombs; i++){
          bombsList.push(generateRandomArray(bombsList,1,numberOfCells));
    };
    return bombsList;
};

