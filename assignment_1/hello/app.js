// Ex.1

var name = "Elisa";
console.log("Hello my name is " + name);

//Ex. 2

var x = 1125;
answer = x%2;
console.log(answer);

//Ex. 3

var a = true;
var b = false
var c = true;
console.log(a||b||c);

//Ex. 4

var a = true;
var b = false;
var c = true;
console.log(a&&b&&c);

//Ex. 5

var answer1 = 10 -3 * 5 / 4 + 202 % 2;
var answer2 = 10 - (3* (5 / 4) + (202 % 3));

console.log(answer1, answer2);

//They are different because of the brackets which changes the order of calculation.

//Ex. 6

var num = 12;
var stringnum = String(num);

console.log(stringnum);;

var numString = "113";
var numInteger = parseInt(numString);

console.log(numInteger);

var numString1 = "1.12356";
var numFloat = parseFloat(numString1);

console.log(numFloat);

var String2 = "Hello World";
var x = parseInt(String2);

console.log(x);

//x results in NaN not a number


//Ex.1 Diving Deeper



var str = "I am a BrainStation student";
var n1 = str.search("BrainStation");
var n2 = str.search("I am a student");
console.log(n1);
console.log(n2);    //search fails for this one

//Ex. 2

var str = "I am a BrainStation student";
var newStr = str.replace("BrainStation student", "Junior Developer");
console.log(newStr);
