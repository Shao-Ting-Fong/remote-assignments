// const banner = document.querySelector('h1');
// const button = document.querySelector('button');
// const hiddenSection = document.querySelector('#more-content');

// banner.addEventListener('click', () => {
//   banner.innerText = "Have a nice day!";
// })

// button.addEventListener('click', () => {
//   hiddenSection.style.display = "block";
// })

const banner = $('h1');
const button = $('button');
const hiddenSection = $('#more-content');

banner.on('click', function () {
  banner.text('Have a nice day!')
})

button.on('click', function () {
  hiddenSection.toggleClass('d-none');
})