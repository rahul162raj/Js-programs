let index = 0;
// store all factory fn objects
let allSwapObjects = [];

// factory function to populate swap items
function swapfn(paramA, paramB) {
  return {
    paramA,
    paramB,
    swap: function () {
      let c = paramA;
      paramA = paramB;
      paramB = c;
    },
    renderItems: function (idA, idB) {
      document.getElementById(idA).innerHTML = paramA;
      document.getElementById(idB).innerHTML = paramB;
    },
  };
}

// create new swap item and render
export function createSwapItem() {
  let swapContainer = document.getElementById("swapContainer");
  let swapGroupedItem = document.createElement("div");
  let elementOne = document.createElement("p");
  let elementTwo = document.createElement("p");
  let swapBtnElement = document.createElement("INPUT");
  // P first element
  elementOne.setAttribute("id", "paramA_" + index);
  swapGroupedItem.appendChild(elementOne);
  // P second element
  elementTwo.setAttribute("id", "paramB_" + index);
  swapGroupedItem.appendChild(elementTwo);
  // BUTTON swap element
  swapBtnElement.setAttribute("type", "button");
  swapBtnElement.setAttribute("value", "SwapIt");
  swapBtnElement.setAttribute("id", "button_" + index);
  // DIV grouped element
  swapGroupedItem.setAttribute("id", "swapGroupedItem_id" + index);
  swapGroupedItem.appendChild(swapBtnElement);
  swapContainer.appendChild(swapGroupedItem);
  // call factory function
  allSwapObjects.push(
    swapfn(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10))
  );
  // render swapped value
  allSwapObjects[index].renderItems("paramA_" + index, "paramB_" + index);
  index++;
}

// swap currently selected items
export function swapIt(currentIndex) {
  allSwapObjects[currentIndex].swap();
  allSwapObjects[currentIndex].renderItems(
    "paramA_" + currentIndex,
    "paramB_" + currentIndex
  );
}
