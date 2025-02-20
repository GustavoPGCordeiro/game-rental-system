let jogosAlugados = 0;

function quantidadeDeJogosAlugados(){

    console.log(`${jogosAlugados} jogos alugados`);
}

function alterarStatus(id){
     let alterar = document.getElementById(`game-${id}`);
     let imagem = alterar.querySelector('.dashboard__item__img');
     let botao = alterar.querySelector('.dashboard__item__button');
      
     if(imagem.classList.contains('dashboard__item__img--rented')){
        if(confirm(`Você tem certeza que deseja devolver o jogo ${id}?`)) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        jogosAlugados--
    }} else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogosAlugados++
    }
    quantidadeDeJogosAlugados()
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});



