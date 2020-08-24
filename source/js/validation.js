/*****************************ОТПРАВКА ФОРМЫ, МОДАЛЬНЫЕ ОКНА******************************/
var feedbackFormButton = document.querySelector(".form__button--feedback");

var popupTour = document.querySelector(".popup--tour");
var closePopupTour = popupTour.querySelector(".form__close--tour");

var popupSuccess = document.querySelector(".popup--success");
var closePopupSuccess = popupSuccess.querySelector(".popup__button");

var form = document.querySelector(".feedback__form");

var userPhone = form.querySelector("[name=phonenumber]");

var userEmail = form.querySelector("[name=email]");

var isStorageSupport = true;
var currentPhone = "";
var currentEmail = "";

try {
  currentPhone = localStorage.getItem("userPhone");
  currentEmail = localStorage.getItem("userEmail");

} catch (err) {
  isStorageSupport = false;
}

popupSuccess.classList.add("popup--success--hide");
//popupError.classList.add("popup-error--hide");

feedbackFormButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  //console.log("начало");
  //alert("начало");
  if (!userPhone.value || !userEmail.value) {

    evt.preventDefault();
    popupError.classList.remove("popup-error--show");
    popupError.offsetWidth = popupError.offsetWidth;
    popupError.classList.add("popup-error--show");
    //alert("пусто");
  } else if (isStorageSupport) {
    //alert("заполнили таки");
    localStorage.setItem("phonenumber", userPhone.value);
    localStorage.setItem("email", userEmail.value);
    popupSuccess.classList.add("popup--success--show");
  }
  //form.classList.add("form-show");

  //popupsuccess.classList.add("popup-success--show");
});

function cursorFocus() {
  if (!userPhone.value) {
    userPhone.focus();
  } else if (!userEmail.value) {
    userEmail.focus();
  }
}

closePopupSuccess.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSuccess.classList.remove("popup--success--show");
});

/*
// уже не нужно с ошибкой
closeError.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupError.classList.remove("popup-error--show");
  popupError.classList.add("popup-error");
  cursorFocus();
});
*/

// в ТЗ нет требований по клику на esc
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupError.classList.contains("popup-error--show")) {
      popupError.classList.remove("popup-error--show");
      cursorFocus();
    } else
    if (popupSuccess.classList.contains("popup-success--show")) {
      popupSuccess.classList.remove("popup-success--show");
    }
  }
});
