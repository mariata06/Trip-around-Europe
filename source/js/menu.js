/*****************************МОБИЛЬНОЕ МЕНЮ**********************************/

var buttonBurger = document.querySelector(".page-header__mobile-menu");

//var mobileMenu = document.querySelector(".site-nav");
var mobileMenu = document.querySelector(".site-nav");

var closeButton = document.querySelector(".site-nav__close");

var mobileLogo = document.querySelector(".page-header__logo");
//console.log(mobileLogo);

mobileMenu.classList.add("site-nav--hide"); // спрятанное моб меню при работающем js
buttonBurger.classList.remove("page-header__mobile-menu--nojs");
closeButton.classList.remove("site-nav__close--nojs");

buttonBurger.addEventListener("click", function (evt) {
  evt.preventDefault();
  mobileMenu.classList.toggle("site-nav--hide");
  mobileMenu.classList.add("site-nav--show");
  buttonBurger.classList.add("page-header__mobile-menu--hide");
  mobileLogo.classList.add("page-header__logo--hide");
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mobileMenu.classList.remove("site-nav--show");
  mobileMenu.classList.add("site-nav--hide");
  buttonBurger.classList.remove("page-header__mobile-menu--hide");
  mobileLogo.classList.remove("page-header__logo--hide");
});
