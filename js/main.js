var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var closePopup = document.querySelector(".modal-close");
var form = popup.querySelector("form");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    console.log("Нужно ввести логин и пароль");
  }
});
