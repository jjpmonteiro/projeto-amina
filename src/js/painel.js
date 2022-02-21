/* INSTRUÇÕES:

    1) Quando clicar na seta "avançar", temos que esconder todas as imagens e
    mostrar a próxima imagem;

    2) A imagem atual começa em 0 (zero), pois é a primeira imagem.
    Assim que for clicado no avançar, precisa adicionar mais 1 ao contador de imagens,
    para poder saber que agora vai mostrar a segunda imagem;

    3) Esconder todas as imagens:
        Pegar todas as imagens usando o DOM e remover a classe "mostrar";
    
    4) Mostrar a próxima imagem:
        Pegar todas as imagens, descobrir qual é a próxima e colocar a classe "mostrar" nela.

const: Não alterar o valor da varíavel em nenhum momento do código

console.log(): Ver o que está acontecendo dentro do JS na aba console
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem() {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

/*
   1) Quando clicar na seta "avançar", temos que esconder todas as imagens e
    mostrar a próxima imagem
*/
setaAvancar.addEventListener('click', function() {

    // Testar se o contador de imagemAtual é igual ao total de imagens
    const totalDeImagens = imagensPainel.length - 1;
    if(imagemAtual === totalDeImagens) {
        return;
    }

/*
    2) A imagem atual começa em 0 (zero), pois é a primeira imagem.
    Assim que for clicado no avançar, precisa adicionar mais 1 ao contador de imagens,
    para poder saber que agora vai mostrar a segunda imagem;
*/
    imagemAtual++;
    
    esconderImagens();
    mostrarImagem();
});

/*
    quando clicar na seta pra voltar temos que 
    esconder todas as imagens e mostrar a imagem anterior
*/
setaVoltar.addEventListener('click', function() {

    if(imagemAtual === 0) {
        return;
    }

    imagemAtual--;

    esconderImagens();
    mostrarImagem();
})