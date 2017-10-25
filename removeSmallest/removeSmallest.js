function removeSmallest(numbers) {
  let smallest = Math.min(...numbers);
  let index = numbers.indexOf(smallest);
  numbers.splice(index, 1);
  return numbers;
}
  // 1. get smallest in array
  // 2. find the index of the number to be pulled from the array
  // 3. return new array with smallest number removed
  // 4.splice at the index we provide, second param is how many items to remove
