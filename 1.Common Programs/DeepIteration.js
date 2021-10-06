const grandFather = {
	name: "rahul",
    age:80,
	kids:[
	  {
	  name:"raj",
      age:27,
      kids:[
        {name:"ra", age:1},
	    {name:"ar", age:2}
      ]
	  }
	]
}

let ageSum=0;
function calculateAge(param){
    for(let key in param){
        if(key == "age") ageSum += param["age"];
    	if(Array.isArray(param[key])){
    		for(let obj of param[key]){
    			calculateAge(obj);
    		}
    	}
    }
}

calculateAge(grandFather)

console.log(ageSum);
