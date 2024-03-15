// Consegna

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
// ed emetto un messaggio in console con il numero della cella cliccata.

// Bonus

// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// - Genero l'elemento del dom al cui click si crea la tabella di gioco
let play = document.querySelector('#play');
// - Creo l'evento click
    //  - Attivo e disattivo la tabella al click
let active = false;
playGrid();
// - Genero la tabella da 10 x 10 numerata proggressivamente inserendo l'elemento del DOM creato nel ciclo for
let userGrid = document.querySelector('#grid');
for (let i = 0; i < 100; i++) {
    // - Creo l'elemento base del DOM
    let gridSquare = createSquare(i + 1);
    // - Creo una funzione al click per colorare la casella di azzurro ed stampa in console di un messaggio con il numero
        // - Inserisco la funzione nel ciclo del programma
    clickSquare(gridSquare);
    // - Popolo la griglia di gioco
    userGrid.append(gridSquare);
}


// FUNCTIONS

// funzione per creare gli item della tabella
// number ----> numero intero usato per popolare l'inner HTML e numerare le celle
// return ----> l'item che deve andare a popolare la grid
function createSquare(number){
    let square = document.createElement('div');
    square.classList.add('square');
    square.innerHTML = `<span>${number}</span>`;
    return square;
}
// funzione per colorare i grid item al click e stampare in console il contenuto dell'elemento 
// gridItem ---> item del DOM a cui applicare l'evento click
function clickSquare(gridItem){
    gridItem.addEventListener('click', function(){
        this.classList.toggle('azure');
        console.log('this-square' , this.children[0].innerHTML);
    });
}

// funzione per attivare o disattivare la griglia di gioco al click del bottone play
function playGrid(){
    play.addEventListener('click', function(){
        if(active === true){
            userGrid.classList.remove('active');
            userGrid.classList.add('hide');  
            play.innerHTML = 'Open';
            active = false;
        }else if(active === false){
            userGrid.classList.remove('hide');
            userGrid.classList.add('active'); 
            play.innerHTML = 'Close';
            active = true; 
        }
    });
}