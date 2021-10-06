
function f(x,y,z){
    
    if(!x) return 0;
    else if(x&&y&&z) return x+y+z;
    else {
        return function(y){
            return function(z){
                return x+y+z;
            }
        }
    }
}

f();
console.log(f(1,2,3));
console.log(f(1)(2)(3));