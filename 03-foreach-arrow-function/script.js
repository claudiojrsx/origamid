// Mostre no console cada paragrafo do site.

const paragrafos = document.querySelectorAll('p');

paragrafos.forEach((item, index) => {
  console.log(item.innerText);
});
