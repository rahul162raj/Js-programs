// Vid #1 Ques #8 Interviewnest mock interview


// question

let obj = {
    x:1, 
    getX(){
        function inner(){
            console.log(this.x);
        }
        inner();
    }
}

obj.getX();



// answer 1 way

let obj1 = {
    x:1, 
    getX(){
        function inner(){
            console.log(this.x);
        }
        inner.call(this);
    }
}

obj1.getX();


// answer 2 way

let obj2 = {
    x:1, 
    getX(){
        let that = this;
        function inner(){
            console.log(that.x);
        }
        inner();
    }
}

obj2.getX();


// answer 3 way

let obj3 = {
    x:1, 
    getX(){
        const inner = () => {
            console.log(this.x);
        }
        inner();
    }
}

obj3.getX();

//pitfall
let obj4= {
    x:1,
    inner : () => {
            console.log(this.x);
        }
}

obj4.inner();

