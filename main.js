import "./src/styles/main.scss";
import "./src/lib/jujeob.js";
import "./src/lib/randomDice.js";

setTimeout(function () {
  const pageElement = document.querySelector("main");
  const pageHeader = document.querySelector("header");
  pageHeader.style.display = "flex";

  pageElement.style.display = "block";
}, 100);
