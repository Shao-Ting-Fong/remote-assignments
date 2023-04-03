function count(input) { // your code here
  // Way 1: for-loop intuition
  let alphabet = {};

  for (let ele of input) {
    alphabet[ele] = (alphabet[ele] || 0) + 1;
  }
  return alphabet;

  // Way 2: Use Array.reduce
  // const alphabet = input.reduce((alphabet, ele) => {
  //   alphabet[ele] = (alphabet[ele] || 0) + 1;
  //   return alphabet;
  // }, {});

  // return alphabet;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"]; console.log(count(input1));
// should print {a:3, b:1, c:2, x:1}

function groupByKey(input) { // your code here
  const alphabet = input.reduce((alphabet, ele) => {
    alphabet[ele.key] = (alphabet[ele.key] || 0) + ele.value;
    return alphabet;
  }, {});

  return alphabet;
}
let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2)); // should print {a:6, b:1, c:7}