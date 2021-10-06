
let input = [1,0,3,4,5,2];

function getMaximumSumArray(input){
    let max = input[0];
    for(let i=0; i<input.length; i++){
        for(let j=i+1; j<input.length; j++){
            let result = 0;
            let k=i;
            while(k <= j){
                result += input[k];
                k++;
            }
            if(result){
                console.log(`From ${i} to ${j} is ${result}`);
                max = result > max ? result : max;
            }
        }
    }
    return max;
}
console.log(`maximum Sum is  : ${getMaximumSumArray(input)}`);