const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  fetch(`http://localhost:3000/data?number=${evt.target[0].value}`)
    .then((data) => data.json())
    .then((data) => {
      if (data.isValid) {
        result.classList.add("calc-result");
        result.innerHTML = data.value;
      } else {
        result.classList.remove("calc-result");
        result.innerHTML = [`<div class="alert alert-danger alert-dismissible" role="alert">`, `   <div>${data.message}</div>`, '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>', "</div>"].join("");
      }
    });
});
