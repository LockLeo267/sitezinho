let indiceAtual = 0; // Índice da imagem atual
const imagens = document.querySelectorAll('.imagem');

function mostrarImagem(index) {
    imagens.forEach((img, i) => {
        img.classList.remove('ativa');
        if (i === index) {
            img.classList.add('ativa');
        }
    });
}

function mudarImagem(direcao) {
    indiceAtual += direcao;
    if (indiceAtual >= imagens.length) {
        indiceAtual = 0; // Volta para o início
    } else if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1; // Vai para o final
    }
    mostrarImagem(indiceAtual);
}

// Inicializa o carrossel
mostrarImagem(indiceAtual);
