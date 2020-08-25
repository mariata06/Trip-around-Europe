/*****************************POPUP Buy Tour**********************************/

var buttonsBuy = document.querySelectorAll(".button--buy-tour");

var popupBuyTour = document.querySelector(".popup--tour");

var closePopupBuyTour = document.querySelector(".form__close--tour");

var overlay = document.querySelector(".popup");

buttonsBuy.forEach(function (btn) {
  btn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBuyTour.classList.remove("popup--tour--hide");
    popupBuyTour.classList.add("popup--tour--show");
  });
});

closePopupBuyTour.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupBuyTour.classList.remove("popup--tour--show");
  popupBuyTour.classList.add("popup--tour--hide");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupBuyTour.classList.contains("popup--tour--show")) {
      popupBuyTour.classList.remove("popup--tour--show");
      popupBuyTour.classList.add("popup--tour--hide");
    }
  }
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupBuyTour.classList.remove("popup--tour--show");
  popupBuyTour.classList.add("popup--tour--hide");
});
