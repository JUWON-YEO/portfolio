import { diceAnimation } from "./diceAnimation.js";
import { attr, getNode, getNodes, endScroll, insertLast, clearContents } from "kind-tiger";

// 1. 주사위 애니메이션
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation() 실행될 수 있도록

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
  // const diceValue = getNode('#cube').getAttribute('dice');
  const diceValue = Number(attr(getNode("#cube"), "dice"));
  console.log(diceValue);

  insertLast(".recordList tbody", createItem(diceValue));

  // 1. insertLast 함수 사용

  // 2. template 전달

  // 3. diceValue interpolation(보간법) 하기 ex) <td>${diceValue}</td>
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
