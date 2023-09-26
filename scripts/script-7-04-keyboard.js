"use strict";
/*
    <button class="clear-button js-clear-button" type="button">Очистить</button>
    <p class="output js-output">Образец текста</p>
*/

// Объект ссылок на объекты
const refs = {
    output: document.querySelector(".js-output"),
    clearBtn: document.querySelector(".js-clear-button")
  }
  console.log(refs);

// Получение ссылки на все єлементы на нажатие кнопки

// Добавление обработчика на окно
// window.addEventListener('keydown', onWindowKeydown); //реагирует на все клавиши
window.addEventListener('keypress', onWindowKeypress); //не включает управляющие клавиши
// window.addEventListener('keyup', onWindowKeyup);

// Добавление обработчика на кнопку
refs.clearBtn.addEventListener('click', onClearBtnClick);
function onWindowKeydown(event){
    console.log('function onWindowKeydown:', event.key);
}

function onWindowKeypress(event){
    // console.log('function onWindowKeypress:', event.key);
    refs.output.textContent += event.key;
}

function onWindowKeyup(event){
    console.log('function onWindowKeyup:', event.key);
}

function onClearBtnClick(event){
    // console.log('function onClearBtnClick:', event);
    refs.output.textContent = '';
}