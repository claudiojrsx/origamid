// Listando imagens com function e forEach.

/*
const imgs = document.querySelectorAll('img');

imgs.forEach(function(item, index, array) {
  console.log(item, index, array);
});
*/

// Listando imagens com arrow function e forEach.

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index, array) => {
  console.log(item);
});
