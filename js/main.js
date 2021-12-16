var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var login = popup.querySelector("[name=login]");
var closePopup = document.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
