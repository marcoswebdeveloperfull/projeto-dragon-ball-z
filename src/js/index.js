const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        
        removeSelecaoBotaoSelecionado();
        
        adicionaClasseSelecionado(botao);
        
        removeSelecaoPersonagemAtual();
        
        adicionaClasseSelecionadoPersonagemCorrespondente(indice);
    });
});

function removeSelecaoBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove('selecionado');
    }
}

function adicionaClasseSelecionado(botao) {
    botao.classList.add('selecionado');
}

function removeSelecaoPersonagemAtual() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove('selecionado');
    }
}

function adicionaClasseSelecionadoPersonagemCorrespondente(indice) {
    personagens[indice].classList.add('selecionado');
}