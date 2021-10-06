function* generators(){
    for(let i=0; i<5; i++){
        yield i;
    }
}

let items= generators();

console.log(items.next())
console.log(items.next())
console.log(items.next())
console.log(items.next())
console.log(items.next())