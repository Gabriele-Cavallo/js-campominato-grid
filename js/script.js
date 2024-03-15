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

// 1 - Creo l'elemento base del DOM
// let square = document.createElement('div');
// square.classList.add('square');
// square.innerHTML = `<span>1</span>`;
// 2 - Genero la tabella da 10 x 10 numerata proggressivamente inserendo l'elemento del DOM creato nel ciclo for
let userGrid = document.querySelector('#grid');
for (let i = 0; i < 100; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.innerHTML = `<span>${i + 1}</span>`;
    userGrid.append(square);
}

// 3 - Creo una funzione al click per colorare la casella di azzurro ed stampa in console di un messaggio con il numero
function clickSquare(){
    square.addEventListener('click', function(){
        this.classList.add('azure');
    });
}
// 4 - Inserisco la funzione nel ciclo del programma