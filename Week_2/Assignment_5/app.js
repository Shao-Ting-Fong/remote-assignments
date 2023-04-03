function binarySearchPosition(numbers, target) { // your code here
  let head = 0;
  let tail = numbers.length - 1;
  let mid = Math.floor((head + tail) / 2);

  while (head <= tail) {

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