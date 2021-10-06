// Vid #3 Ques #1 Interviewnest mock interview


let ary = [1,2,3,4];

function findSum(ary){
    let maxEl = Math.max(...ary);
    let minEl = Math.min(...ary);
    // my way
    // let minSum = ary.filter(val => val != maxEl).reduce((acc,val)=> acc+val);
    // let maxSum = ary.filter(val => val != minEl).reduce((acc,val)=> acc+val);
    
    // thier way
    let arySum = ary.reduce((acc,val)=> acc+val);
    let minSum = arySum - maxEl;
    let maxSum = arySum - minEl;
    return `Minimum sum ${minSum} and Maximum Sum ${maxSum}`
}

console.log(findSum(ary));