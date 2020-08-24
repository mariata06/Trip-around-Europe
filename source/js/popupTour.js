/*****************************POPUP Buy Tour**********************************/

var buttonsBuy = document.querySelectorAll(".button--buy-tour");

var popupBuyTour = document.querySelector(".popup--tour");

var closePopupBuyTour = document.querySelector(".form__close--tour");

buttonsBuy.forEach(buton => {
  buton.addEventListener("click", function (evt) {
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
