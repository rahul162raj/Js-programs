// Vid #3 Ques #2 Interviewnest mock interview

let num =123456;

let count = 0;

if (typeof num == 'number' ){
    //1 way
    // while(num!=0){
    // count++;
    // num = Math.floor(num/10);
    // }  
    // easy way
    let len = Math.ceil(Math.log10(num));
    console.log(`length of number ${len}`)
} else {
    console.log(`enter valid number`);
}
