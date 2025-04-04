document.addEventListener('DOMContentLoaded', function(){


    diminuiFonteBotao,addEventListener ('click',function() {
        tamanhoAtualFonte -=0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    } )
    const botaoDeAcessibilidade = document.getElementbyId(' botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementbyId('opcoes-acessibilidade');
    botaoDeAcessibilidade.addEventListener('click', fucntion()) {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle(' apresenta-lista');
    } 
} )
