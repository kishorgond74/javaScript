let score = "33abc"
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN


// "33" => 33
// "33abc" => NaN
// "abc" => NaN
// "33abc" => 33
// true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); 
// 1 => true
// 0 => false
// "" => false
// "Kishor" => true
// null => false
// undefined => false
// NaN => false

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);