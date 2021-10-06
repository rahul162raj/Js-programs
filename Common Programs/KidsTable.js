let limit = 90;
let problemCount = 5;
let index=0;

while(index<problemCount){
    let value1 = Math.floor(Math.random()* limit);
    let value2 = Math.floor(Math.random()* limit);
    if((value1 + value2) < limit){
        console.log(`${value1} + ${value2} =`);
        index++;
    }
}