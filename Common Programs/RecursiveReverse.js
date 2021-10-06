function reverseWord(index, str){
    if(index == str.length) return index;
    else{
        reverseWord(index+1, str);
        console.log(str[index]);
    }
}

reverseWord(0, "Rahul Raj");