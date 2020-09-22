var map;
const header = document.querySelector(".header");
const header__logo = document.querySelector(".header__logo-img");
const header__text = document.querySelector(".header__logo-text")

// 2gis
DG.then(function () {
  map = DG.map("map", {
    center: [43.2301, 76.8875],
    zoom: 13,
  });
  DG.marker([43.2301, 76.8875]).addTo(map).bindPopup("Вы кликнули по мне!");
});

// Header
function checkScroll() {
  let scrollPos = window.scrollY;

  if (scrollPos > 1) {
    header.classList.add("header__back");
    header__logo.classList.add("logo_min");
    header__text.classList.add("text_min");
  } else {
    header.classList.remove("header__back");
    header__logo.classList.remove("logo_min");
    header__text.classList.remove("text_min");
  }
}

window.addEventListener("scroll", function () {
  checkScroll();
});
document.addEventListener("DOMContentLoaded", checkScroll);

// Burger menu
function myFunction() {
  var myLinks = document.getElementById("myLinks");
  if (myLinks.style.display === "block") {
    myLinks.style.display = "none";
  } else {
    myLinks.style.display = "block";
  }
}
