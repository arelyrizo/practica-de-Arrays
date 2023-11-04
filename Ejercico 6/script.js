function bubbleSort(arr) {
  const n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements if they are in the wrong order
        let temp = arr[i];
        arr[i] = arr[i +1];
        arr[i] = arr[i];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } 
      
while (swapped);

  return arr;
}

const inputArray = [3, 6, 12, 5, 100, 1];
const sortedArray = bubbleSort(inputArray);

console.log(sortedArray);
