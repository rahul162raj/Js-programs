console.log("*".repeat(15) + "SORT" + "*".repeat(15));

// #2 Sort an array of strings
// Traditional method
// Bubblesort by char code value
let nameArray = ["geeksforgeeks", "geeksquiz", "clanguage"];
console.log("Before:", nameArray);
for (let outerIndex = 0; outerIndex < nameArray.length - 1; outerIndex++) {
  for (let curIndex = 0; curIndex < nameArray.length - 1; curIndex++) {
    let minIndex = checkMinString(nameArray, curIndex);
    // swap if next element is smaller than current element
    if (curIndex !== minIndex) {
      let emptyBox = nameArray[curIndex];
      nameArray[curIndex] = nameArray[curIndex + 1];
      nameArray[curIndex + 1] = emptyBox;
    }
  }
}
function checkMinString(nameArray, index) {
  let iterator = 0;
  let minIndex = index;
  // limit loop based on string length
  let endIndex =
    nameArray[index].length <= nameArray[index + 1].length
      ? nameArray[index].length
      : nameArray[index + 1].length;
  // check every character using charcode value
  while (iterator < endIndex) {
    if (
      nameArray[index].charCodeAt(iterator) >
      nameArray[index + 1].charCodeAt(iterator)
    ) {
      minIndex = index + 1;
      break;
    }
    iterator++;
  }
  // return smaller value index
  return minIndex;
}

console.log("Traditional:", nameArray);
nameArray = ["geeksforgeeks", "geeksquiz", "clanguage"];
console.log("Inbuilt:", nameArray.sort());
