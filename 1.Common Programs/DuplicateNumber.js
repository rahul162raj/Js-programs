// Duplicate number in array


let ary = [1,2,3,3,4,5,5,5,5,5,6,6];

let visited = Array(ary.length).fill(0);

for(let i=0; i<ary.length; i++){
    if(visited[i]) continue;
    let count =1;
    for(let j=i+1; j<ary.length; j++){
        if(ary[i] == ary[j]){
            visited[j] = 1
            count++;
        }
    }
    if(count > 1) console.log(`${ary[i]} is repeated for ${count} times`);
}
