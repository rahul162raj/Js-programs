let number = 123;

let newNumber=0;

function checkPalindrome(num){
    while (num != 0){ 
        newNumber = (newNumber*10) + num%10;
        num = Math.floor(num/10) 
    }
    return newNumber === number ?  "palindrome" : "not a palindrome";
}


console.log(checkPalindrome(number));

let length = Math.ceil(Math.log10(number))
console.log('length', length);
console.log('firstDigit', Math.floor(number / Math.pow(10,length-1)))
console.log('lastDigit', number%10)