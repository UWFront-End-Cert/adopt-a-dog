//create an array with at least 5 strings
const array = ["one", "two", "three", "four", "five"];

//add an element to the end of the array
array.push("sixAdded");

//remove the third element (index 2)
array.splice(2, 1);

//create a string from the elements and comma separate them
const string = array.join(", ");

//console log each step
console.log("Added elements: ", array);
console.log("String with added commas: ", string);