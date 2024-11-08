{
//
// Problem 1: Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

const sumArray = (numbers: number[]): number => {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sumArray([1, 2, 3, 4, 5])); 
  

//
}