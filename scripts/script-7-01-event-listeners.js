"use strict";
/*
div class="container">
    <button class="magic-button js-target-btn" type="button">Целевая кнопка</button>
    <button class="magic-button js-add-listener" type="button">Добавить слушателя</button>
    <button class="magic-button js-remove-listener" type="button">Удалить слушателя</button>
    
</div>
*/

//Получение ссыллок
const targetBtn = document.querySelector('.js-target-btn');
console.log(targetBtn);
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');
// Навешивание анонимной функции

// targetBtn.addEventListener('click', () =>{
//     console.log("Click on target button");
// });

addListenerBtn.addEventListener('click', (event) => {
    console.log("Add handler on click of targent button");
    console.log(event);
    // Добавление функции onTargetBtnClick() на событие клик targetBtn
    targetBtn.addEventListener('click', onTargetBtnClick);
});


removeListenerBtn.addEventListener('click', (event) => {
    console.log("Remove handler from click of targent button");
    // Удаление функции onTargetBtnClick на событие клик кнопки targetBtn
    targetBtn.removeEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick(event) {
    console.log("Click on target button");
}

//  Соглашение о нотации названия обработчика события
// function handleTargetBtnClick(event){
//     console.log("Click on target button");
// }

// function targetBtnClickHandler(event){
//     console.log("Click on target button");
// }





