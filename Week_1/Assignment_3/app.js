function countAandB(input) { // your code here
  let count = 0;
  for (let char of input) {
    if (char === 'a' || char === 'b') {
      count += 1;
    }
  }
  return count;
}
function toNumber(input) { // your code here

  // Way 1:
  // const alphabet = ['a', 'b', 'c', 'd', 'e'];
  // const result = [];
  // for (let char of input) {
  //   result.push(alphabet.findIndex((element) => char === element) + 1);
  // }

  const alphabet = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
  }

  return input.map((ele) => { return alphabet[ele] });
}
let input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c'];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]

let input2 = ['e', 'd', 'c', 'd', 'e'];
console.log(countAandB(input2)); // should print 0 
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]