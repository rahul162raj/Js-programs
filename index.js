import { StopWatch } from "./ConstructorFunction/stopwatch.js";
import { createSwapItem, swapIt } from "./FactoryFunction/swap.js";
import createCHTMLElement from "./Prototype/prototype.js";
import createCCHTMLElement from "./ClassInheritance/customElement.js";
import Stack from "./ClassInheritance/stack.js";

import "./String/_geeksforgeeks.js";

/**
 * Factory function : swap
 */
function getCurrentSwapBtn(e) {
  let currentBtnId = new String();
  currentBtnId = e.srcElement.id;
  let currentIndex = currentBtnId.split("_")[1];
  if (currentIndex) swapIt(currentIndex);
}
document
  .getElementById("addSwapItemBtn")
  .addEventListener("click", () => createSwapItem());
document.addEventListener("click", (e) => getCurrentSwapBtn(e));

/**
 * Constructor function : stopwatch
 */
let stopWatch = new StopWatch();
document
  .getElementById("startBtn")
  .addEventListener("click", () => stopWatch.start());
document
  .getElementById("stopBtn")
  .addEventListener("click", () => stopWatch.stop());
document
  .getElementById("resetBtn")
  .addEventListener("click", () => stopWatch.reset());

/**
 * Prototype : Custom HTML Element
 */
let p = createCHTMLElement("p");
p.value = "P element created using prototype <br> ClickMe";
p.hidden = true;
p.setAttributes("id", "cParagraph");
p.setAttributes("title", "CUSTOMELEMENT");
p.setAttributes("class", "mr-8");
p.setAttributes("style", "color:green;cursor:pointer");
p.setAttributes("align", "left");
p.render();
let img = createCHTMLElement("img");
img.src = "https://picsum.photos/100/100";
img.setAttributes("title", "CUSTOMELEMENT");
img.render();
document.getElementById("cParagraph").addEventListener("click", p.click);

/**
 * Class : Custom HTML Element
 */
// this behaves sames as prototype inheritance
let cc = createCCHTMLElement("p");

/**
 * Class : Stack
 */
let s = new Stack();
