
function convertNumber(input){
    let num = 0;
    let parsedInput = input.trim().split("");
    
    if(parsedInput.length === 0)
    return 'not a number';
    
    for(let index=0; index<parsedInput.length; index++){
        if(isNaN(parsedInput[index]-0)){
            num = -1;
            break;  
        } else {
            num = (num *10) + (parsedInput[index]-0); 
        }
    }
    return num!=-1 ? num : "not a number";
}

console.log(convertNumber("12345"));
console.log(convertNumber("1a"));
console.log(convertNumber("a1"));
console.log(convertNumber(""));
console.log(convertNumber("  "));
console.log(convertNumber(" 23 "));