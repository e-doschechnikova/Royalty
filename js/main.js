var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var closePopup = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");
var isStorageSupport = true;
var storage = "";
var mapLink = document.querySelector(".button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close-map");
var footerMap = document.querySelector(".footer-map");

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
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
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

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

footerMap.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.add("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
