"use strict";

const formRef = document.querySelector(".js-login-form");
formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  // Получение ссылки на контролы формы
  const formElements = event.currentTarget.elements;
  console.log(formElements);
  console.log("Input email: ", formElements.email.value); 
  console.log("Input password:", formElements.password.value);  
  console.log("Input subscription:", formElements.subscription.value);
  
  // Считывание данных через FormData
  const formData = new FormData(event.currentTarget);
  console.log(formData);

  // Парсинг данных через FormData
  formData.forEach((value, name) => {
      console.log(`FormData: ${name}: ${value}`);      
  })
}






