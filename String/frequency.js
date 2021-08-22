console.log("*".repeat(15) + "FREQUENCY" + "*".repeat(15));

// #3 Check frequency of character

let input = "aaall";
console.log("input : ", input);

// using ASCII value
console.log("Using ASCII value :");
const ASCII_VALUE = 256;
let count = Array(256).fill(0);
for (let iterator = 0; iterator < input.length; iterator++) {
  count[input[iterator].charCodeAt(0)] += 1;
}
for (let iterator = 0; iterator < ASCII_VALUE; iterator++) {
  if (count[iterator] === 0) {
    continue;
  } else {
    console.log(
      `frequency of ${String.fromCharCode(iterator)} is ${count[iterator]}`
    );
  }
}

// using extra arr
function usingExtraArr(inputArray) {
  let inputCopy = inputArray.slice();
  let visited = undefined;
  for (let row = 0; row < inputCopy.length; row++) {
    if (!inputCopy[row]) continue;
    let count = 1;
    for (let col = row + 1; col < inputCopy.length; col++) {
      if (inputCopy[row] === inputCopy[col]) {
        count += 1;
        inputCopy[col] = visited;
      }
    }
    inputCopy[row] = count;
  }
  return inputCopy;
}

console.log("Using Extra Array :");
usingExtraArr(input.split("")).forEach((count, index) => {
  if (count) console.log(`frequency of ${input.split("")[index]} is ${count}`);
});
