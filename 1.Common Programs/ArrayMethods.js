arr = [1,2,3,1,5];

arrObj = [{id : 1, name:"a"}, {id : 2, name:"b"}];

// #access element
console.log(arr[0], arr[arr.length-1]);


// #add element in first & last
arr.push(6);
arr.unshift(0);
console.log("add", arr);

// #remove element in first & last
arr.pop();
arr.shift()
console.log("remove", arr);


// #find element in array
//indexOf : prevIndex + 1;
//lastindexOf: prevIndex - 1;
console.log("find index", arr.indexOf(1), arr.indexOf(1,1), arr.lastIndexOf(1), arr.lastIndexOf(1,2));
console.log("present/not", arr.includes(1));

// #substring
//   0 1 2 3 4 index
//  [1,2,3,4,5]
//  -5 -4 -3 -2 -1 negative index

console.log("slice", arr.slice(0), arr.slice(1), arr.slice(1,3), arr.slice(2,2), arr.slice(-5,-2))


// #splice : remove and add
// note slice(1,3) not equal to splice(1,3) [splice use length as second param]
// splice mutate the array
console.log("splice", arr.splice(1,3), arr, arr.splice(0,0,...[1,2,3]));
console.log("concat", arr, arr.concat([6],[7,8]));


// #predicate

console.log("find", arrObj.find(val => val.id == 1), arrObj.findIndex(val => val.id == 1))
console.log("map", arr.map(val => val * 2));
console.log("filter", arr.filter(val => val<3));
console.log("reduce", arr.reduce((a,b) => a+b));
console.log("sort", arr.sort((a,b) => a-b));
console.log("some", arr.some((val) => val==3));
console.log("every", arr.every((val) => val==3));
console.log("copy target start end", arr.copyWithin(0,2,3));


// console.log(arrObj);
