const result = document.querySelector(".all-items");

async function ajax(src, callback) {
  // your code here
  const data = await fetch(src);
  const dataJson = await data.json();
  callback(dataJson);
}

function render(data) {
  // your code here
  // document.createElement() and appendChild() methods are preferred.
  result.innerHTML = "";
  data.forEach((element) => {
    const product = document.createElement("tr");
    product.innerHTML = `
    <td>${element.name}</td>
    <td>${element.price}</td>
    <td>${element.description}</td>`;
    result.appendChild(product);
  });
}

const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

const showButton = document.querySelector(".btn-show");

showButton.addEventListener("click", () => {
  console.log("clicked");
  ajax(url, (response) => {
    render(response);
  });
}); // you should get product information in JSON format and render data in the page)
