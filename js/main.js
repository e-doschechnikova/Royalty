var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var closePopup = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");
var isStorageSupport = true;
var storage = "";

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    console.log("Нужно ввести логин и пароль");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}
