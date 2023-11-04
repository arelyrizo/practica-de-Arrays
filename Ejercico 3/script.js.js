function calculateSumAndProduct(arr) {
  // Use the reduce() method to compute the sum and product
  
 
const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const product = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

  // Print out the sum and product
  console.log(`The sum is ${sum}. The product is ${product}.`);
}

// Example usage
const inputArray = [2, 3, 4, 5];
calculateSumAndProduct(inputArray);
