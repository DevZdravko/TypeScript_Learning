// Define a function that takes two parameters of type number and returns their sum.
function addNumbers(a: number, b: number): number {
  return a + b;
}

// Declare variables with explicit types.
let num1: number = 5;
let num2: number = 10;

// Call the function and store the result in a variable.
let sum: number = addNumbers(num1, num2);
console.log("Sum:", sum);

// Declare an array with specified type.
let numbers: number[] = [1, 2, 3, 4, 5];

// Use a for...of loop to iterate over the array.
for (let num of numbers) {
  console.log("Number:", num);
}

// Define an interface representing a person.
interface Person {
  name: string;
  age: number;
}

// Create an object of type Person.
let person: Person = {
  name: "John",
  age: 25,
};

// Access properties of the person object.
console.log("Name:", person.name);
console.log("Age:", person.age);

