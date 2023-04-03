const banner = document.querySelector('h1');
const button = document.querySelector('button');
const hiddenSection = document.querySelector('#more-content');

banner.addEventListener('click', () => {
  console.log("CLICKED");
  banner.innerText = "Have a nice day!";
})

button.addEventListener('click', () => {
  console.log('button clicked.')
  hiddenSection.style.display = "block";
})