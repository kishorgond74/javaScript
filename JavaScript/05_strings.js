const name = "Kishor"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Kishor')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(0, 5);
console.log(anotherString);

const newStringOne = "    Kishor     "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://kishor.com/kishor%20gond"

console.log(url.replace('%20', '-'))

console.log(url.includes('kishor'))

console.log(gameName.split('-'))