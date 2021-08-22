console.log("*".repeat(15) + "SWAP" + "*".repeat(15));

// #1 Swap two strings
function traditionalSwap(param1, param2) {
  let emptyBox = 0;
  emptyBox = param1;
  param1 = param2;
  param2 = emptyBox;
  return `After swapped ${param1}, ${param2}`;
}
function usingSubstring(param1, param2) {
  param1 = param1 + param2; // haihello
  param2 = param1.substring(0, param1.length - param2.length); //hai
  param1 = param1.substring(param2.length); // hello
  return `After swapped ${param1}, ${param2}`;
}
let param1 = "hai";
let param2 = "hello";
console.log(`Before : ${param1}, ${param2}`);
console.log("Traditional :", traditionalSwap(param1, param2));
console.log("UsingSubstring :", usingSubstring(param1, param2));
