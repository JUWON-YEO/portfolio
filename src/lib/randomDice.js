import { diceAnimation } from "./diceAnimation.js";
import { attr, getNode, getNodes, endScroll, insertLast, clearContents } from "kind-tiger";

const [rollingButton, recordButton, resetButton] = getNodes(".buttonGroup > button");
const recordListWrapper = getNode(".recordListWrapper");

let count = 0;
let total = 0;

function createItem(value) {
  const template = `
      <tr>
        <td>${++count}</td>
        <td>${value}</td>
        <td>${(total += value)}</td>
      </tr>
    `;
  return template;
}

function renderRecordItem() {
  const diceValue = Number(attr(getNode("#cube"), "dice"));
  console.log(diceValue);

  insertLast(".recordList tbody", createItem(diceValue));

  endScroll(recordListWrapper);
}

const handleRollingDice = (() => {
  let isClicked = false;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 100);
      recordButton.disabled = true;
      resetButton.disabled = true;

      rollingButton.innerHTML = `주사위<br> 멈추기`;
    } else {
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
      rollingButton.innerHTML = `주사위<br> 굴리기`;
    }
    isClicked = !isClicked;
  };
})();

function handleRecord() {
  recordListWrapper.hidden = false;

  renderRecordItem();
}

function handleReset() {
  recordListWrapper.hidden = true;
  clearContents("tbody");
  count = 0;
  total = 0;
}

rollingButton.addEventListener("click", handleRollingDice);
recordButton.addEventListener("click", handleRecord);
resetButton.addEventListener("click", handleReset);
