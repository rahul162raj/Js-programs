
let ary = [5,4,3,2,1];


function bubbleSort(input){
    
    for(let i=0; i<input.length; i++){
        for(let j=0; j<input.length-1; j++){
            if(input[j] > input[j+1]){
                let temp = input[j];
                input[j] = input[j+1];
                input[j+1] = temp;
            }
        }
        console.log(ary);
    }
}


bubbleSort(ary);
