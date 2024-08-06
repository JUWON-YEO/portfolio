import "./src/styles/main.scss";
import "./src/lib/jujeob.js";
import "./src/lib/randomDice.js";

function documentLoad() {
  const pageElement = document.querySelector("main");
  const pageHeader = document.querySelector("header");
  pageHeader.style.display = "none";
  pageElement.style.display = "none";

  setTimeout(function () {
    pageHeader.style.display = "flex";
    pageElement.style.display = "block";
  }, 100);
}
documentLoad();
