// Vid #1 Ques #5 Interviewnest mock interview

let A = function(x){
    this.x = x;
    this.getX= function(){
       return this.x; 
    }
}

let b = function(x,y){
    A.call(this,x);
    this.y = y;
    this.getY = function(){
        return this.y;
    }
}

let newB = new b(1,2);

console.log(newB.getY())
console.log(newB.getX());