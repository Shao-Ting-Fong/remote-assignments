function binarySearchPosition(numbers, target) {
  // Time Complexity: O(logN)
  // Space Complexity: O(1)

  let head = 0;
  let tail = numbers.length - 1;
  let mid = Math.floor((head + tail) / 2);

  while (head <= tail) { // Should be <= instead of < so one-element cases won't failed.

    mid = Math.floor((head + tail) / 2);

    if (numbers[mid] === target) {
      return mid;
    } else if (numbers[mid] > target) {
      tail = mid - 1;
    } else {
      head = mid + 1;
    }
  }
  return -1;
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3