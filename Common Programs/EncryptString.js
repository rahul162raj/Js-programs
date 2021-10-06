
// https://www.geeksforgeeks.org/encrypt-the-string-2/

let input = "aaaaaaaaaaa";
let input1 = "abc"

/* 
Output : 
ba
1c1b1a 
*/


function countOccurence(input){
    let hashMap = Array(256).fill(0);
    for(let i=0; i<input.length; i++){
        hashMap[input.charCodeAt(i)] +=1;
    }
    return hashMap;
}

function reverseString(input){
    return input.split("").reverse().join("");
}

function encryptString(input){
    let hashMap = countOccurence(input);
    let result = '';
    hashMap.forEach((val,index, hashMap) =>{
        if(val){
            let char = String.fromCharCode(index);
            let hex =  val.toString(16); 
            result = result + (char+hex);
        }
    })
    return reverseString(result);
}


console.log(encryptString(input));
console.log(encryptString(input1));


