function avg(data) { // your code here
  let moneySum = 0;
  for (let ele of data.products) {
    moneySum += ele.price;
  }
  return moneySum / data.size;
}
console.log(avg({
  size: 3,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ]
})); // should print the average price of all products