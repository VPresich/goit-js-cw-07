"use strict";
/*
<div class="box js-box">
    <div class="inner-box"></div>
</div>
*/

const boxRef = document.querySelector('.js-box');

// Добавление обработчиков мыши
boxRef.addEventListener('mouseenter', onMouseEnter);
boxRef.addEventListener('mouseleave', onMouseLeave);
// boxRef.addEventListener('mousemove', onMouseMove);


function onMouseEnter(event){
    console.log('function onMouseEnter:');
    const box = event.currentTarget;
    box.classList.add('box--active');
}

function onMouseLeave(event){
    console.log('function onMouseLeave:');
    const box = event.currentTarget;
    box.classList.remove('box--active');
}

function onMouseMove(event){
    // console.log('function onMouseMove:', event);    
}

