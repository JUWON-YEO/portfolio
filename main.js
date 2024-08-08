import "./src/styles/main.scss";
import "./src/lib/jujeob.js";
import "./src/lib/randomDice.js";
import { getNode } from "kind-tiger";
import gsap from "gsap";

const prevButton = getNode(".previous__button");
const cardList = document.querySelector(".portfolio__project__prev");

let checked;
function renderProjectCard() {
  cardList.classList.toggle("is-active");

  gsap.from(cardList, {
    y: 30,
    opacity: 0,
    stagger: 0.1,
  });
}

prevButton.addEventListener("click", renderProjectCard);
