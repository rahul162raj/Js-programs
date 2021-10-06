let str = "RAHUL RAJ";

// #access characters
console.log(str[0], str[str.length-1], str[15]);
console.log(str.charAt(0), str.charAt(str.length-1), str.charAt(15));

// #ASCII
console.log(str.charCodeAt(0), str.charCodeAt(str.length-1));
console.log(String.fromCharCode(0), String.fromCharCode(str.length-1));
 
// #find words/ characters
console.log(str.indexOf("A"), str.indexOf("HUL"), str.indexOf("A",2));
console.log(str.lastIndexOf("A"), str.lastIndexOf("HUL"), str.lastIndexOf("A",6));
console.log(str.includes("RAJ"));
console.log(str.startsWith("R"), str.endsWith("R"))
// will replace all occurence str.replaceAll("RA", "HU")
console.log(str.replace("RAJ", "RAJ     "),"#", str.trim());

// #substring
console.log(str.slice(1), "#", str.slice(0,2),"#", str.slice(-10),"#", str.slice(-3,-2))
console.log(str.substring(1), "#", str.substring(0,2),"#", str.substring(-10), "#",str.substring(9,6))
console.log(str.substr(1), "#", str.substr(0,2),"#")

// #case change
console.log(str.toUpperCase(), str.toLowerCase(), str.repeat(2));