
Array.prototype.myOwnMap = function(callback){
    let newAry=[];
    for(let index=0; index<this.length; index++){
        newAry.push(callback(this[index], index, this));
    }
    return newAry;
}

console.log([1,2,3,4,5].myOwnMap(val=>val*2)); 