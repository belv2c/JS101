/*//create a variable with the string list of colors

var colorList = "chartreuse, navy, forest green, aqua, purple, frost, emerald, international-rescue orange, seafoam green, firehouse red";

// make the list into an array

var array = colorList.split(", ");
// console.log(array);

// sort that array alphabetically
array.sort();
console.log(array);

//loop through the array and log to the console the statement:
// The color at _index number_ is _color name_

for (var i = 0; i < array.length; i++){
	console.log("The color at " + i + " is " + array [i]);
}*/



/*Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes. Use console.log() to output the value of the counter variable each time through the loop. Stop execution of the loop if the counter variable’s value is greater than 120.

Example output:

Current value is 5
Current value is 15
Current value is 25

*/

for(var i = 5; i <= 120; i = i + 10){
	console.log("current value", i);
}