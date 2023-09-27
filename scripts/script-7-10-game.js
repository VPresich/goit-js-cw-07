"use strict";
/*
Игра крестики-нолики
<div class="game-overlay-wrapper">
    <div class="game-container">
      <div class="game-content js-game-content"></div>
    </div>
    <p class="game-result-overlay js-overlay">Game is over:</p>
 </div>
*/

const gameContainerRef = document.querySelector('.js-game-content');
createGameMarkUp(gameContainerRef);
gameContainerRef.addEventListener('click', onGameContentClick);

const overlayRef = document.querySelector('.js-overlay');
overlayRef.addEventListener('click', onOverlayClick);

let player = 'X';
const historyX = [];
const history0 = [];
const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [1, 5, 9],
];

function onGameContentClick(event) {
  const { target } = event;
  if (!target.classList.contains('js-game-item')) {
    return;
  }
    // Если ячейка занята
  if (target.textContent) {
    return;
  } 

  let result = false;
  const id = Number(target.dataset.id);  
  if (player === 'X') {
    historyX.push(id);   
    result = isWinner(historyX);
  }
   else {
    history0.push(id);   
    result = isWinner(history0);
  }
  target.textContent = player;

  if (result) {    
    showGameResult(` Winer: ${player}`);    
    return;
  }

  if (historyX.length + history0.length === 9) {       
    showGameResult(` Try again`);    
    return;
  }
  player = player === 'X' ? '0' : 'X';  
}

function onOverlayClick() {
  resetGame();
}

function isWinner(arr) {  
  return wins.some(item => item.every(id => arr.includes(id)));
}

function resetGame() {
  player = 'X';
  historyX.splice(0, historyX.length);
  history0.splice(0, history0.length);
  createGameMarkUp(gameContainerRef);
  hideGameResult();
}

function createGameMarkUp(containerRef) {
  let gameMarkUp = '';
  for (let i = 1; i < 10; i += 1) {
    gameMarkUp += `<div class="game-item js-game-item" data-id="${i}"></div>`;
  }
  containerRef.innerHTML = gameMarkUp;
}

function showGameResult(strResult) {
  const overlayRef = document.querySelector('.js-overlay');
  overlayRef.textContent += strResult;
  overlayRef.classList.add("is-show");
}

function hideGameResult() {
  const overlayRef = document.querySelector('.js-overlay');
  overlayRef.textContent = "Game is over.";
  overlayRef.classList.remove("is-show");
}

