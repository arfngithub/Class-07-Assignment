// Question 01
// Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.

// let originalArray = [1, 2, 3, 4, 5];

// let multipliedArray = originalArray.map(number => number * 2);

// console.log(multipliedArray); // Output: [2, 4, 6, 8, 10]

// Question 02
// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.

// let originalArray = ["apple", "banana", "cherry", "date", "grape"];

// let filteredArray = originalArray.filter(fruit => fruit.length > 5);

// console.log(filteredArray); // Output: ["banana", "cherry"]


// Question 03
// Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.

// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Array of squares of even numbers
// let evenSquaresArray = numbers
//   .filter(number => number % 2 === 0) // Filter even numbers
//   .map(evenNumber => evenNumber * evenNumber); // Square each even number

// console.log("Even Squares Array:", evenSquaresArray);

// // Array of squares of odd numbers
// let oddSquaresArray = numbers
//   .filter(number => number % 2 !== 0) // Filter odd numbers
//   .map(oddNumber => oddNumber * oddNumber); // Square each odd number

// console.log("Odd Squares Array:", oddSquaresArray);


// Question 04
// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.

// let celsiusTemperatures = [0, 10, 20, 30, 40];

// let fahrenheitTemperatures = celsiusTemperatures.map(celsius => (celsius * 9/5) + 32);

// console.log(fahrenheitTemperatures); // Output: [32, 50, 68, 86, 104]

// Question 05
// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.

// let numbers = [3, 6, 9, 12, 15, 18];

// let doubledOddValues = numbers
//   .filter(number => number % 2 !== 0) // Filter odd numbers
//   .map(oddNumber => oddNumber * 2); // Double each odd number

// console.log(doubledOddValues); // Output: [6, 18, 30]

// Question 06
// Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".

// const names = ["Alice", "Bob", "Charlie", "David", "Emily"];

// names.forEach(name => {
//   console.log(name + "!");
// });
