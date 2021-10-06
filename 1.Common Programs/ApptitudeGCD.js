// Apptitude GCD & LCM


// Assume that you have 15 candies and 40 lollipops, you need to distribute that to children equally.

let candies = 15, lollipops = 40;

function findGcd(num1, num2){
    let gcd = 0;
    for(let i=1; i<num1 && i<num2; i++){
        if(num1%i== 0 && num2%i==0) gcd =i;
    }
    return gcd;
}

let gcd = findGcd(candies, lollipops);

console.log(`we can give ${candies/gcd} candies & ${lollipops/gcd} lollipops to ${gcd} children`);


let lcm = (candies * lollipops) / gcd;

console.log(`${lcm/candies} packs ${candies} candies & ${lcm/lollipops} packs of ${lollipops} lollipops to ${lcm} children`);
