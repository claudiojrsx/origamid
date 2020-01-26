// Listando todas as imagens do site.
const img = document.querySelectorAll('img');
console.log(img);

// Listando todas as imagens que comecam com a frase "imagem".
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

// Listando todos os links que começam com "#" na frente.
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Listando o primeiro h2.
const descricao = document.querySelector('.animais-descricao h2');
console.log(descricao);

// Selecionando o último "p" do site.
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);
