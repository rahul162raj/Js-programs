console.log("*".repeat(15) + "PALINDROME" + "*".repeat(15));

// #3 Check palindrome
function traditional(str) {
  for (
    let sIndex = 0, eIndex = str.length - 1;
    sIndex < str.length / 2;
    sIndex++, eIndex--
  ) {
    let emptybox = str[sIndex];
    str[sIndex] = str[eIndex];
    str[eIndex] = emptybox;
  }
  return str.join("");
}

let output = "";
function reverseRecursion(str, index = 0) {
  if (index > str.length - 1) return;
  else {
    reverseRecursion(str, index + 1);
    output += str[index];
  }
}

let str = "mom";
console.log("Traditional :", str === traditional(str.split("")));
console.log("Inbuilt :", str === str.split("").reverse().join(""));
reverseRecursion(str);
console.log("recursion :", str === output);
