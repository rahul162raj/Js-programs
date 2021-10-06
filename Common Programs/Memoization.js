
function memoization(){
    
    let cache = {};
    
    return function(param){
        if(param in cache){
            console.log("inside")
            return cache[param]
        } else {
            console.log("outside")
            let result = param *2;
            cache[param] = result;
            return result;
        }
    }
}

let add2 = memoization();
console.log(add2(3));
console.log(add2(5));
console.log(add2(3));
