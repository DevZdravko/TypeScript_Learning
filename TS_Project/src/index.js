"use strict";
// Define aa function that takes two parameters of type number and returns their sum.
function addNumbers(a, b) {
    return a + b;
}
// Declare variables with explicit types.
let num1 = 5;
let num2 = 10;
// Call the function and store the result in a variable.
let sum = addNumbers(num1, num2);
console.log("Sum:", sum);
// Declare an array with specified type.
let numbers = [1, 2, 3, 4, 5];
// Use a for...of loop to iterate over the array.
for (let num of numbers) {
    console.log("Number:", num);
}
// Create an object of type Person.
let person = {
    name: "John",
    age: 25,
};
// Access properties of the person object.
console.log("Name:", person.name);
console.log("Age:", person.age);
