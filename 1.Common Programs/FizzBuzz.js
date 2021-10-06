// Vid #5 Ques #1 Interviewnest mock interview


let ary = [6,10,15];

ary.forEach(value => {
    let fizz = value%3 === 0;
    let bizz = value%5 === 0;
    let result = fizz ? (bizz ? "FizzBuzz" : "Fizz") : bizz ? "Bizz" : value;
    console.log(result);
})

