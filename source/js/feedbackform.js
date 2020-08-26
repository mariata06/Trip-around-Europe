/**************ОТПРАВКА ФОРМЫ Обратной связи, модальное окно успешной отправки*************/

var feedbackFormButton = document.querySelector(".form__button--feedback");

var popupSuccess = document.querySelector(".popup--success");
var closePopupSuccess = popupSuccess.querySelector(".popup__button");

var form = document.querySelector(".feedback__form");

//var overlay = document.querySelector(".popup");

var userPhone = form.querySelector("[name=phonenumber]");

var userEmail = form.querySelector("[name=email]");

var isStorageSupport = true;
var currentPhone = "";
var currentEmail = "";

try {
  currentPhone = localStorage.getItem("phonenumber");
  currentEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

popupSuccess.classList.add("popup--success--hide");

if (currentPhone) {
  userPhone.value = currentPhone;
  userEmail.focus();
} else {
  userPhone.focus();
}
if (currentEmail) {
  userEmail.value = currentEmail;
}

feedbackFormButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (!userPhone.value || !userEmail.value) {
    evt.preventDefault();
  } else if (isStorageSupport) {
    localStorage.setItem("phonenumber", userPhone.value);
    localStorage.setItem("email", userEmail.value);
    popupSuccess.classList.remove("popup--success--hide");
    popupSuccess.classList.add("popup--success--show");
  }
});

closePopupSuccess.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSuccess.classList.remove("popup--success--show");
  popupSuccess.classList.add("popup--success--hide");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupSuccess.classList.contains("popup--success--show")) {
      popupSuccess.classList.remove("popup--success--show");
      popupSuccess.classList.add("popup--success--hide");
    }
  }
});

/*
overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSuccess.classList.remove("popup--success--show");
  popupSuccess.classList.add("popup--success--hide");
});
*/

// для валидации номера телефона и почты
/*
function ValidMail() {
  var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  var regex = /.+@.+\..+/;
  var myMail = document.getElementById('email').value;
  var valid = re.test(myMail);
  if (valid) output = 'Адрес эл. почты введен правильно!';
  else output = 'Адрес электронной почты введен неправильно!';
  document.getElementById('message').innerHTML = output;
  return valid;
}

function ValidPhone() {
  //var re = /^\d[\d\(\)\ -]{4,14}\d$/;
  var regexp = /d{10}/;
  //var myPhone = document.getElementById('phone').value;
  var myPhone = document.querySelector('.form__input--phone').value;
  var valid = regexp.test(myPhone);
  if (valid) output = 'Номер телефона введен правильно!';
  else output = 'Номер телефона введен неправильно!';
  document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'+output;
  return valid;
}
*/
