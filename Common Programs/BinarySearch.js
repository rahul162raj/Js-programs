

let ary = [1, 4, 7, 9, 16, 56, 70];


function binarySearch(input, key){
    
    let startPos = 0;
    let endPos = input.length;
    let result = `not found`;

    while (startPos <= endPos){
        let middleEl = Math.floor((startPos+endPos)/2);
        if(input[middleEl] == key){
            result = `found at position ${middleEl}`;
            break;
        } 
        if(key > input[middleEl]){
           startPos = middleEl+1; 
        }
        else{
            endPos = middleEl-1
        }
    }
   return result; 
}

console.log(binarySearch(ary, 0));