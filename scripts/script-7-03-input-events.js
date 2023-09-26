"use strict";
// Разметка
/*
<form class="licence-form">
    <label class="licence-input-label">
      Имя:
      <input class="licence-input js-licence-input" type="text" name="name" />
    </label>
    
    <div class="licence-checlbox-container">
      <label class="licence-checkbox-label">
        <input
          class="licence-checbox js-licence-checbox"
          type="checkbox"
          name="password"
        />
        Принимаю лицензионное соглашение
      </label>
    </div>

    <button class="licence-button js-licence-button" type="submit" disabled>
      Зарегистрироваться как &nbsp; <span>Аноним</span>
    </button>
  </form>
</div>
*/

// Ниже обработчики inputs:
// Объект ссылок на контролы формы

const refs = {
  input: document.querySelector(".js-licence-input"),
  nameLabel: document.querySelector(".js-licence-button > span"),
  licenceCheckBox: document.querySelector(".js-licence-checbox"),
  btn: document.querySelector(".js-licence-button"),
}

console.log(refs);
refs.input.addEventListener('focus', onInputFocus);
refs.input.addEventListener('blur', onInputBlur); 

// refs.input.addEventListener('change', onInputChange); // Не использовать change для текста
refs.input.addEventListener('input', onInputChange);
refs.licenceCheckBox.addEventListener('change', onCheckBoxChange);

function onInputFocus() {
    //console.log("Интпут получил фокус");
}

function onInputBlur() {
    //console.log("Интпут потерял фокус (событие блюр)");
}

// Будем использовать это событие для того, чтобы отловить ввод
function onInputChange(event) { 
  // console.log(`Value: ${event.currentTarget.value}`);   
  refs.nameLabel.textContent = event.currentTarget.value ? event.currentTarget.value : "Аноним";  
}

function onCheckBoxChange(event) { 
  // console.log(event.currentTarget.checked);
  refs.btn.disabled = !event.currentTarget.checked;
}






