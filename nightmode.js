var nightModeToggleButton = document.querySelector(".nightModeButton");
var container = document.querySelector(".container");
var para = document.querySelector(".paragraph");
var header = document.querySelector(".header");
var body = document.querySelector("body");

nightModeToggleButton.onclick = function () {
  nightModeToggleButton.classList.toggle("night-mode");
  container.classList.toggle("night-mode");
  para.classList.toggle("night-mode");
  header.classList.toggle("night-mode");
  body.classList.toggle("night-mode");
};