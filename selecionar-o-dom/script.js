// Listando todas as imagens do site.
const img = document.querySelectorAll('img');
console.log(img);

// Listando todas as imagens que comecam com a frase "imagem".
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);