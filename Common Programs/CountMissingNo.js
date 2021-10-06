// Vid #2 Ques #3 Interviewnest mock interview

let ary = [1,2,3,4,6];
let n = ary.length+1;

let arySum = ary.reduce((acc,val) => acc+val);

let totalSum = Math.floor((n * (n+1)) / 2);

console.log(totalSum - arySum);
