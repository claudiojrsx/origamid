const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[1])

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linksInterno = document.querySelector('[href^="#"]');
console.log(linksInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

//console.log(gridSectionHTML[0]);
//console.log(gridSectionNode[0]);

gridSectionNode.forEach((item, index) => {
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach((item) => {
  console.log(item);
});
